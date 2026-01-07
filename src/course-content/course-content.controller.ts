import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CourseContentService } from './course-content.service';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';
import { CourseModule } from './entities/course-module.entity.js';

@ApiTags('course-content')
@Controller('course-content')
export class CourseContentController {
  constructor(private readonly courseContentService: CourseContentService) { }

  @Post()
  @ApiOperation({ summary: 'Create or update the entire Table of Contents for a course' })
  @ApiOkResponse({ schema: { example: { id: 'slug', courseModules: [] } } })
  create(@Body() createCourseContentDto: CreateCourseContentDto) {
    return this.courseContentService.create(createCourseContentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all courses table of contents' })
  @ApiOkResponse({ schema: { example: [{ id: 'slug', courseModules: [] }] } })
  findAll() {
    return this.courseContentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the whole Table of Contents for a course by courseId (slug)' })
  @ApiOkResponse({ schema: { example: { id: 'slug', courseModules: [] } } })
  findOne(@Param('id') id: string) {
    return this.courseContentService.findByCourse(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseContentDto: UpdateCourseContentDto) {
    return this.courseContentService.update(id, updateCourseContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseContentService.remove(id);
  }
}
