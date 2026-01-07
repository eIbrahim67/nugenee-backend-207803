import { Repository } from 'typeorm';
import { CourseProject } from './entities/course-project.entity.js';
import { CreateCourseProjectDto } from './dto/create-course-project.dto';
import { UpdateCourseProjectDto } from './dto/update-course-project.dto';
export declare class CourseProjectsService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<CourseProject>);
    create(createCourseProjectDto: CreateCourseProjectDto): Promise<{
        id: string;
        projects: CourseProject[];
    }>;
    findAll(): Promise<{
        id: string;
        projects: CourseProject[];
    }[]>;
    findByCourse(courseId: string): Promise<{
        id: string;
        projects: CourseProject[];
    }>;
    findOne(id: string): Promise<CourseProject>;
    update(id: string, updateCourseProjectDto: UpdateCourseProjectDto): Promise<CourseProject>;
    remove(id: string): Promise<CourseProject>;
}
