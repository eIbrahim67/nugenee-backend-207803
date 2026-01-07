import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PathProject } from './entities/path-project.entity.js';
import { CreatePathProjectDto } from './dto/create-path-project.dto';
import { UpdatePathProjectDto } from './dto/update-path-project.dto';

@Injectable()
export class PathProjectsService {
  constructor(
    @InjectRepository(PathProject)
    private readonly projectRepository: Repository<PathProject>,
  ) { }

  async create(createPathProjectDto: CreatePathProjectDto) {
    const { id: pathId, projects } = createPathProjectDto;

    for (const projectData of projects) {
      let project = await this.projectRepository.findOneBy({ id: projectData.id });
      if (project) {
        this.projectRepository.merge(project, { ...projectData, pathId });
      } else {
        project = this.projectRepository.create({ ...projectData, pathId });
      }
      await this.projectRepository.save(project);
    }

    return this.findByPath(pathId);
  }

  async findAll() {
    const projects = await this.projectRepository.find({
      order: { pathId: 'ASC', order: 'ASC' }
    });

    const grouped = projects.reduce((acc, proj) => {
      const pathId = proj.pathId;
      if (!acc[pathId]) {
        acc[pathId] = {
          id: pathId,
          projects: []
        };
      }
      acc[pathId].projects.push(proj);
      return acc;
    }, {} as Record<string, { id: string; projects: PathProject[] }>);

    return Object.values(grouped);
  }

  async findByPath(pathId: string) {
    const projects = await this.projectRepository.find({
      where: { pathId },
      order: { order: 'ASC' }
    });

    if (!projects || projects.length === 0) {
      throw new NotFoundException(`No projects found for learning path ID ${pathId}`);
    }

    return {
      id: pathId,
      projects
    };
  }

  async findOne(id: string) {
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: ['path']
    });
    if (!project) {
      throw new NotFoundException(`Path Project with ID ${id} not found`);
    }
    return project;
  }

  async update(id: string, updatePathProjectDto: UpdatePathProjectDto) {
    const project = await this.findOne(id);
    const updated = this.projectRepository.merge(project, updatePathProjectDto);
    return this.projectRepository.save(updated);
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    return this.projectRepository.remove(project);
  }
}
