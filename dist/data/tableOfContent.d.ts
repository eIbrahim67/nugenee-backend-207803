export interface TableOfContent {
    id: string;
    courseModules: CourseModule[];
}
export interface CourseModule {
    id: string;
    order: number;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    duration: string;
    durationAr: string;
    lessons: CourseLesson[];
}
export interface CourseLesson {
    id: string;
    order: number;
    title: string;
    titleAr: string;
    type: "video" | "article" | "hands-on" | "quiz" | "project";
    duration: string;
    durationAr: string;
    objectives: string[];
    objectivesAr: string[];
    isPreview?: boolean;
}
export interface LessonResource {
    id: string;
    type: "pdf" | "repo" | "link" | "slides";
    title: string;
    url: string;
}
export interface ModuleWithLessons {
    title: string;
    titleAr: string;
    lessons: {
        title: string;
        titleAr: string;
    }[];
}
export declare const tableOfContent: TableOfContent[];
export declare const getAllTablesOfContents: () => TableOfContent[];
export declare const getTableOfContentsById: (id: string) => TableOfContent | undefined;
export declare const getCourseModuleLessonsById: (id: string) => ModuleWithLessons[];
