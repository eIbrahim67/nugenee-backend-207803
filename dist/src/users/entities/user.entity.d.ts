import { Role } from '../enums/role.enum';
export declare class User {
    id: string;
    email: string;
    password: string;
    name: string;
    nameAr: string;
    role: Role;
    isActive: boolean;
    social: {
        linkedin?: string;
        twitter?: string;
        website?: string;
    };
    bio: string;
    bioAr: string;
    expertise: string[];
    expertiseAr: string[];
    photo: string;
    createdAt: Date;
    updatedAt: Date;
    generateId(): void;
}
