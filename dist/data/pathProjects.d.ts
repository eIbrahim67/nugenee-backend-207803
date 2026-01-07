export interface PathProject {
    id: string;
    pathId: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    image: string;
    order: number;
}
export declare const pathProjects: PathProject[];
export declare const getProjectsByPathId: (pathId: string) => PathProject[];
export declare const getPathProjectById: (id: string) => PathProject | undefined;
