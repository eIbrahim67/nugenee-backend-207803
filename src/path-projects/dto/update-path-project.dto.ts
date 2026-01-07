import { PartialType } from '@nestjs/swagger';
import { CreatePathProjectDto } from './create-path-project.dto';

export class UpdatePathProjectDto extends PartialType(CreatePathProjectDto) {}
