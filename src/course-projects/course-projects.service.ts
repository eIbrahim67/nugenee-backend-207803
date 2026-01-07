import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseProject } from './entities/course-project.entity.js';
import { CreateCourseProjectDto } from './dto/create-course-project.dto';
import { UpdateCourseProjectDto } from './dto/update-course-project.dto';

@Injectable()
export class CourseProjectsService {
  constructor(
    @InjectRepository(CourseProject)
    private readonly projectRepository: Repository<CourseProject>,
  ) { }

  async create(createCourseProjectDto: CreateCourseProjectDto) {
    const { id: courseId, projects } = createCourseProjectDto;

    for (const projectData of projects) {
      let project = await this.projectRepository.findOneBy({ id: projectData.id });
      if (project) {
        this.projectRepository.merge(project, { ...projectData, courseId });
      } else {
        project = this.projectRepository.create({ ...projectData, courseId });
      }
      await this.projectRepository.save(project);
    }

    return this.findByCourse(courseId);
  }

  async findAll() {
    const projects = await this.projectRepository.find({
      order: { courseId: 'ASC', order: 'ASC' }
    });

    const grouped = projects.reduce((acc, proj) => {
      const courseId = proj.courseId;
      if (!acc[courseId]) {
        acc[courseId] = {
          id: courseId,
          projects: []
        };
      }
      acc[courseId].projects.push(proj);
      return acc;
    }, {} as Record<string, { id: string; projects: CourseProject[] }>);

    return Object.values(grouped);
  }

  async findByCourse(courseId: string) {
    const projects = await this.projectRepository.find({
      where: { courseId },
      order: { order: 'ASC' }
    });

    if (!projects || projects.length === 0) {
      throw new NotFoundException(`No projects found for course ID ${courseId}`);
    }

    return {
      id: courseId,
      projects
    };
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: ['course']
    });
    if (!project) {
      throw new NotFoundException(`Course Project with ID ${id} not found`);
    }
    return project;
  }

  async update(id: string, updateCourseProjectDto: UpdateCourseProjectDto) {
    const project = await this.findOne(id);
    const updated = this.projectRepository.merge(project, updateCourseProjectDto);
    return this.projectRepository.save(updated);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    return this.projectRepository.remove(project);
  }
}
