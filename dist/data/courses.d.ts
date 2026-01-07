import { LucideIcon } from "lucide-react";
export interface Course {
    id: string;
    icon: LucideIcon;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    overview: string;
    overviewAr: string;
    level: string;
    levelAr: string;
    duration: string;
    durationAr: string;
    schedule: string;
    scheduleAr: string;
    skills: string[];
    skillsAr: string[];
    prerequisites: string[];
    prerequisitesAr: string[];
    tools: string[];
    objectives: string[];
    objectivesAr: string[];
    certification: string;
    certificationAr: string;
    targetAudience: string[];
    targetAudienceAr: string[];
    color: string;
    categoryId: string;
    instructorId: string;
    active: boolean;
}
export interface Category {
    id: string;
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
}
export declare const COURSE_CATEGORIES: Category[];
export type CourseCategory = typeof COURSE_CATEGORIES[number];
export declare const courses: Course[];
export declare const getCourseById: (id: string) => Course | undefined;
export declare const getCoursesByCategory: () => Record<string, Course[]>;
