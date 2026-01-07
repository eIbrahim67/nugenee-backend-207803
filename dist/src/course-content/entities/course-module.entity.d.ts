import { Course } from '../../courses/entities/course.entity.js';
import { CourseLesson } from './course-lesson.entity.js';
export declare class CourseModule {
    id: string;
    courseId: string;
    course: Course;
    order: number;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    duration: string;
    durationAr: string;
    lessons: CourseLesson[];
}
