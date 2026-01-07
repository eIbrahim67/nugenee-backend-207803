import { Course } from '../../courses/entities/course.entity';
export declare class CourseProject {
    id: string;
    courseId: string;
    course: Course;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    image: string;
    order: number;
}
