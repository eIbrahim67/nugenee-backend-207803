import { Repository } from 'typeorm';
import { Course } from './entities/course.entity.js';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<Course>);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: number | string): Promise<Course>;
    update(id: number | string, updateCourseDto: UpdateCourseDto): Promise<Course>;
    remove(id: number | string): Promise<Course>;
}
