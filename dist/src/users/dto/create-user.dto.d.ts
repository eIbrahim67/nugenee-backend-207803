import { Role } from '../enums/role.enum';
export declare class CreateUserDto {
    email: string;
    password: string;
    name: string;
    nameAr?: string;
    role?: Role;
}
