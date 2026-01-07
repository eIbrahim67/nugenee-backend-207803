declare class LessonDto {
    id: string;
    title: string;
    titleAr?: string;
    type: string;
    duration: string;
    durationAr?: string;
    objectives?: string[];
    objectivesAr?: string[];
    isPreview?: boolean;
}
declare class ModuleDto {
    id: string;
    order: number;
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
    duration: string;
    durationAr?: string;
    lessons: LessonDto[];
}
export declare class CreateCourseContentDto {
    id: string;
    courseModules: ModuleDto[];
}
export {};
