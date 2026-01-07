export declare class LearningPath {
    id: string;
    icon: string;
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
    difficulty: string;
    difficultyAr: string;
    color: string;
    courses: {
        courseId: string;
        orderInPath: number;
        isOptional?: boolean;
    }[];
    outcomes: string[];
    outcomesAr: string[];
    isCustomizable: boolean;
    featured: boolean;
}
