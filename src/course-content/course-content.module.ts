import { Module } from '@nestjs/common';
import { CourseContentService } from './course-content.service';
import { CourseContentController } from './course-content.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './entities/course-module.entity.js';
import { CourseLesson } from './entities/course-lesson.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([CourseModule, CourseLesson])],
  controllers: [CourseContentController],
  providers: [CourseContentService],
  exports: [TypeOrmModule],
})
export class CourseContentModule { }
