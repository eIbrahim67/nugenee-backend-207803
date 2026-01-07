import { CourseContentService } from './course-content.service';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';
import { CourseModule } from './entities/course-module.entity.js';
export declare class CourseContentController {
    private readonly courseContentService;
    constructor(courseContentService: CourseContentService);
    create(createCourseContentDto: CreateCourseContentDto): Promise<{
        id: string;
        courseModules: CourseModule[];
    }>;
    findAll(): Promise<{
        id: string;
        courseModules: CourseModule[];
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        courseModules: CourseModule[];
    }>;
    update(id: string, updateCourseContentDto: UpdateCourseContentDto): Promise<CourseModule>;
    remove(id: string): Promise<CourseModule>;
}
