import { IsString, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class LessonDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    titleAr?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    duration: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    durationAr?: string;

    @ApiProperty({ type: [String] })
    @IsArray()
    @IsOptional()
    objectives?: string[];

    @ApiProperty({ type: [String] })
    @IsArray()
    @IsOptional()
    objectivesAr?: string[];

    @ApiProperty({ required: false })
    @IsOptional()
    isPreview?: boolean;
}

class ModuleDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    order: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    titleAr?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    descriptionAr?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    duration: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    durationAr?: string;

    @ApiProperty({ type: [LessonDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LessonDto)
    lessons: LessonDto[];
}

export class CreateCourseContentDto {
    @ApiProperty({ description: 'The course ID (slug)' })
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty({ type: [ModuleDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ModuleDto)
    courseModules: ModuleDto[];
}
