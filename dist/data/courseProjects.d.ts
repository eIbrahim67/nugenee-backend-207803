export interface CourseProject {
    id: string;
    courseId: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    image: string;
    order: number;
}
export declare const courseProjects: CourseProject[];
export declare const getProjectsByCourseId: (courseId: string) => CourseProject[];
export declare const getProjectById: (id: string) => CourseProject | undefined;
