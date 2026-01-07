import { PartialType } from '@nestjs/swagger';
import { CreateCourseProjectDto } from './create-course-project.dto';

export class UpdateCourseProjectDto extends PartialType(CreateCourseProjectDto) {}
