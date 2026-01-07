import { Module } from '@nestjs/common';
import { PathProjectsService } from './path-projects.service';
import { PathProjectsController } from './path-projects.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PathProject } from './entities/path-project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PathProject])],
  controllers: [PathProjectsController],
  providers: [PathProjectsService],
  exports: [TypeOrmModule],
})
export class PathProjectsModule { }
