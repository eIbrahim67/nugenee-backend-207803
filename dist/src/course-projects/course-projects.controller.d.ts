import { CourseProjectsService } from './course-projects.service';
import { CreateCourseProjectDto } from './dto/create-course-project.dto';
import { UpdateCourseProjectDto } from './dto/update-course-project.dto';
export declare class CourseProjectsController {
    private readonly courseProjectsService;
    constructor(courseProjectsService: CourseProjectsService);
    create(createCourseProjectDto: CreateCourseProjectDto): Promise<{
        id: string;
        projects: import("./entities/course-project.entity").CourseProject[];
    }>;
    findAll(): Promise<{
        id: string;
        projects: import("./entities/course-project.entity").CourseProject[];
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        projects: import("./entities/course-project.entity").CourseProject[];
    }>;
    update(id: string, updateCourseProjectDto: UpdateCourseProjectDto): Promise<import("./entities/course-project.entity").CourseProject>;
    remove(id: string): Promise<import("./entities/course-project.entity").CourseProject>;
}
