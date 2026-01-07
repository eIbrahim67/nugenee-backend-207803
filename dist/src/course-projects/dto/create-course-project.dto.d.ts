declare class ProjectItemDto {
    id: string;
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
    image?: string;
    order?: number;
}
export declare class CreateCourseProjectDto {
    id: string;
    projects: ProjectItemDto[];
}
export {};
