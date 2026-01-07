import { Repository } from 'typeorm';
import { CourseModule } from './entities/course-module.entity.js';
import { CourseLesson } from './entities/course-lesson.entity.js';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';
export declare class CourseContentService {
    private readonly moduleRepository;
    private readonly lessonRepository;
    constructor(moduleRepository: Repository<CourseModule>, lessonRepository: Repository<CourseLesson>);
    create(createCourseContentDto: CreateCourseContentDto): Promise<{
        id: string;
        courseModules: CourseModule[];
    }>;
    findAll(): Promise<{
        id: string;
        courseModules: CourseModule[];
    }[]>;
    findByCourse(courseId: string): Promise<{
        id: string;
        courseModules: CourseModule[];
    }>;
    findOne(id: string): Promise<CourseModule>;
    update(id: string, updateCourseContentDto: UpdateCourseContentDto): Promise<CourseModule>;
    remove(id: string): Promise<CourseModule>;
}
