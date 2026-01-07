import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LearningPath } from './entities/learning-path.entity.js';
import { CreateLearningPathDto } from './dto/create-learning-path.dto';
import { UpdateLearningPathDto } from './dto/update-learning-path.dto';

@Injectable()
export class LearningPathsService {
  constructor(
    @InjectRepository(LearningPath)
    private readonly pathRepository: Repository<LearningPath>,
  ) { }

  create(createLearningPathDto: CreateLearningPathDto) {
    const path = this.pathRepository.create(createLearningPathDto);
    return this.pathRepository.save(path);
  }

  findAll() {
    return this.pathRepository.find();
  }

  async findOne(id: string) {
    const path = await this.pathRepository.findOne({
      where: { id }
    });
    if (!path) {
      throw new NotFoundException(`Learning Path with ID ${id} not found`);
    }
    return path;
  }

  async update(id: string, updateLearningPathDto: UpdateLearningPathDto) {
    const path = await this.findOne(id);
    const updated = this.pathRepository.merge(path, updateLearningPathDto);
    return this.pathRepository.save(updated);
  }

  async remove(id: string) {
    const path = await this.findOne(id);
    return this.pathRepository.remove(path);
  }
}
