import { Module } from '@nestjs/common';
import { CourseProjectsService } from './course-projects.service';
import { CourseProjectsController } from './course-projects.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseProject } from './entities/course-project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseProject])],
  controllers: [CourseProjectsController],
  providers: [CourseProjectsService],
  exports: [TypeOrmModule],
})
export class CourseProjectsModule { }
