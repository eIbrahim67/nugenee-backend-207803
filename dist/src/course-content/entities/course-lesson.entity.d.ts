import { CourseModule } from './course-module.entity.js';
export declare class CourseLesson {
    id: string;
    moduleId: string;
    module: CourseModule;
    order: number;
    title: string;
    titleAr: string;
    type: string;
    duration: string;
    durationAr: string;
    objectives: string[];
    objectivesAr: string[];
    isPreview: boolean;
}
