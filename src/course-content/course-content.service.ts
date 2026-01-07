import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseModule } from './entities/course-module.entity.js';
import { CourseLesson } from './entities/course-lesson.entity.js';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';

@Injectable()
export class CourseContentService {
  constructor(
    @InjectRepository(CourseModule)
    private readonly moduleRepository: Repository<CourseModule>,
    @InjectRepository(CourseLesson)
    private readonly lessonRepository: Repository<CourseLesson>,
  ) { }

  async create(createCourseContentDto: CreateCourseContentDto) {
    const { id: courseId, courseModules } = createCourseContentDto;

    // We use a transaction or just clear and recreate if that's the preferred pattern for "aggregate"
    // For now, let's implement a "synchronize" logic:

    for (const modData of courseModules) {
      const { lessons, ...moduleData } = modData;

      let module = await this.moduleRepository.findOneBy({ id: modData.id });
      if (module) {
        this.moduleRepository.merge(module, { ...moduleData, courseId });
      } else {
        module = this.moduleRepository.create({ ...moduleData, courseId });
      }
      await this.moduleRepository.save(module);

      for (const lessonData of lessons) {
        let lesson = await this.lessonRepository.findOneBy({ id: lessonData.id });
        if (lesson) {
          this.lessonRepository.merge(lesson, { ...lessonData, moduleId: module.id });
        } else {
          lesson = this.lessonRepository.create({ ...lessonData, moduleId: module.id });
        }
        await this.lessonRepository.save(lesson);
      }
    }

    return this.findByCourse(courseId);
  }

  async findAll() {
    const modules = await this.moduleRepository.find({
      relations: ['lessons'],
      order: { courseId: 'ASC', order: 'ASC' }
    });

    const grouped = modules.reduce((acc, mod) => {
      const courseId = mod.courseId;
      if (!acc[courseId]) {
        acc[courseId] = {
          id: courseId,
          courseModules: []
        };
      }
      acc[courseId].courseModules.push(mod);
      return acc;
    }, {} as Record<string, { id: string; courseModules: CourseModule[] }>);

    return Object.values(grouped);
  }

  async findByCourse(courseId: string) {
    const modules = await this.moduleRepository.find({
      where: { courseId },
      relations: ['lessons'],
      order: { order: 'ASC' }
    });

    if (!modules || modules.length === 0) {
      throw new NotFoundException(`No content found for course ID ${courseId}`);
    }

    return {
      id: courseId,
      courseModules: modules
    };
  }

  async findOne(id: string) {
    const module = await this.moduleRepository.findOne({
      where: { id },
      relations: ['course', 'lessons']
    });
    if (!module) {
      throw new NotFoundException(`Course Module with ID ${id} not found`);
    }
    return module;
  }

  async update(id: string, updateCourseContentDto: UpdateCourseContentDto) {
    const module = await this.findOne(id);
    const updated = this.moduleRepository.merge(module, updateCourseContentDto as any);
    return this.moduleRepository.save(updated);
  }

  async remove(id: string) {
    const module = await this.findOne(id);
    return this.moduleRepository.remove(module);
  }
}
