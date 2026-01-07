import { LucideIcon } from "lucide-react";
export interface PathCourse {
    courseId: string;
    orderInPath: number;
    isOptional?: boolean;
}
export interface LearningPath {
    id: string;
    icon: LucideIcon;
    name: string;
    nameAr: string;
    subtitle: string;
    subtitleAr: string;
    description: string;
    descriptionAr: string;
    goal: string;
    goalAr: string;
    duration: string;
    durationAr: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
    difficultyAr: string;
    color: string;
    courses: PathCourse[];
    outcomes: string[];
    outcomesAr: string[];
    isCustomizable?: boolean;
    featured?: boolean;
}
export declare const learningPaths: LearningPath[];
export declare const getPathById: (id: string) => LearningPath | undefined;
export declare const getRegularPaths: () => LearningPath[];
export declare const getCustomPath: () => LearningPath | undefined;
export declare const getForgePath: () => LearningPath | undefined;
