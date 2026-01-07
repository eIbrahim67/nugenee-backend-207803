export interface Instructor {
    id: string;
    name: string;
    nameAr: string;
    role: string;
    roleAr: string;
    bio: string;
    bioAr: string;
    photo: string;
    expertise: string[];
    expertiseAr: string[];
    courses: string[];
    social?: {
        linkedin?: string;
        twitter?: string;
        website?: string;
    };
}
export declare const instructors: Instructor[];
export declare const getInstructorById: (id: string) => Instructor | undefined;
