import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity.js';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number | string) {
    const category = await this.categoryRepository.findOne({
      where: typeof id === 'string' ? { id } : { id: id as any },
    });
    if (!category) {
      throw new NotFoundException(`Category with ID/Slug ${id} not found`);
    }
    return category;
  }

  async update(id: number | string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.findOne(id);
    const updated = this.categoryRepository.merge(category, updateCategoryDto);
    return this.categoryRepository.save(updated);
  }

  async remove(id: number | string) {
    const category = await this.findOne(id);
    return this.categoryRepository.remove(category);
  }
}
