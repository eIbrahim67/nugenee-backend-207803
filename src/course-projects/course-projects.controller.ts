import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseProjectsService } from './course-projects.service';
import { CreateCourseProjectDto } from './dto/create-course-project.dto';
import { UpdateCourseProjectDto } from './dto/update-course-project.dto';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';

@Controller('course-projects')
export class CourseProjectsController {
  constructor(private readonly courseProjectsService: CourseProjectsService) { }

  @Post()
  @ApiOperation({ summary: 'Create or update projects for a course' })
  @ApiOkResponse({ schema: { example: { id: 'slug', projects: [] } } })
  create(@Body() createCourseProjectDto: CreateCourseProjectDto) {
    return this.courseProjectsService.create(createCourseProjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all course projects grouped by course' })
  @ApiOkResponse({ schema: { example: [{ id: 'slug', projects: [] }] } })
  findAll() {
    return this.courseProjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all projects for a specific course by courseId (slug)' })
  @ApiOkResponse({ schema: { example: { id: 'slug', projects: [] } } })
  findOne(@Param('id') id: string) {
    return this.courseProjectsService.findByCourse(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseProjectDto: UpdateCourseProjectDto) {
    return this.courseProjectsService.update(id, updateCourseProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseProjectsService.remove(id);
  }
}
