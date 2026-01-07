import { IsString, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class PathProjectItemDto {
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
    description: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    descriptionAr?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    image?: string;

    @ApiProperty({ default: 0 })
    @IsNumber()
    @IsOptional()
    order?: number;
}

export class CreatePathProjectDto {
    @ApiProperty({ description: 'The learning path ID (slug)' })
    @IsString()
    @IsNotEmpty()
    id: string;

    @ApiProperty({ type: [PathProjectItemDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PathProjectItemDto)
    projects: PathProjectItemDto[];
}
