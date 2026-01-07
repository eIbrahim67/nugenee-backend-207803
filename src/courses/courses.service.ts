import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity.js';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) { }

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  findAll() {
    return this.courseRepository.find({
      relations: ['category', 'instructor'],
      where: { active: true }
    });
  }

  async findOne(id: number | string) {
    const course = await this.courseRepository.findOne({
      where: typeof id === 'string' ? { id } : { id: id as any },
      relations: ['category', 'instructor']
    });
    if (!course) {
      throw new NotFoundException(`Course with ID/Slug ${id} not found`);
    }
    return course;
  }

  async update(id: number | string, updateCourseDto: UpdateCourseDto) {
    const course = await this.findOne(id);
    const updated = this.courseRepository.merge(course, updateCourseDto);
    return this.courseRepository.save(updated);
  }

  async remove(id: number | string) {
    const course = await this.findOne(id);
    return this.courseRepository.remove(course);
  }
}
