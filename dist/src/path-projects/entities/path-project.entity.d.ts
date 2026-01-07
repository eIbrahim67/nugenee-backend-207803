import { LearningPath } from '../../learning-paths/entities/learning-path.entity';
export declare class PathProject {
    id: string;
    pathId: string;
    path: LearningPath;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    image: string;
    order: number;
}
