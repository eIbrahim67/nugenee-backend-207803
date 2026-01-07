export interface Admin {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    nameAr: string;
}
export declare const admins: Admin[];
export declare const getAdminByEmail: (email: string) => Admin | undefined;
