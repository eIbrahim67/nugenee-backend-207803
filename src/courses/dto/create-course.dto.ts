import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
    @ApiProperty({ description: 'The slug/id of the course' })
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
    description: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    descriptionAr?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    overview: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    overviewAr?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    level: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    levelAr?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    duration: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    durationAr?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    schedule?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    scheduleAr?: string;

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    skills?: string[];

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    skillsAr?: string[];

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    prerequisites?: string[];

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    prerequisitesAr?: string[];

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    tools?: string[];

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    objectives?: string[];

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    objectivesAr?: string[];

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    certification?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    certificationAr?: string;

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    targetAudience?: string[];

    @ApiProperty({ type: [String], required: false })
    @IsArray()
    @IsOptional()
    targetAudienceAr?: string[];

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    color?: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    categoryId: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    instructorId: string;

    @ApiProperty({ required: false, default: true })
    @IsBoolean()
    @IsOptional()
    active?: boolean;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    icon?: string;
}
