import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { PathProjectsService } from './path-projects.service';
import { CreatePathProjectDto } from './dto/create-path-project.dto';
import { UpdatePathProjectDto } from './dto/update-path-project.dto';

@ApiTags('path-projects')
@Controller('path-projects')
export class PathProjectsController {
  constructor(private readonly pathProjectsService: PathProjectsService) { }

  @Post()
  @ApiOperation({ summary: 'Create or update projects for a learning path' })
  @ApiOkResponse({ schema: { example: { id: 'slug', projects: [] } } })
  create(@Body() createPathProjectDto: CreatePathProjectDto) {
    return this.pathProjectsService.create(createPathProjectDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all path projects grouped by path' })
  @ApiOkResponse({ schema: { example: [{ id: 'slug', projects: [] }] } })
  findAll() {
    return this.pathProjectsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all projects for a specific path by pathId (slug)' })
  @ApiOkResponse({ schema: { example: { id: 'slug', projects: [] } } })
  findOne(@Param('id') id: string) {
    return this.pathProjectsService.findByPath(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePathProjectDto: UpdatePathProjectDto) {
    return this.pathProjectsService.update(id, updatePathProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pathProjectsService.remove(id);
  }
}
