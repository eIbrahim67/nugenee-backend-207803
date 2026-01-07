
export interface Admin {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    nameAr: string;
}

export const admins: Admin[] = [
    {
        id: "1",
        email: "ibrahim@nugenee.com",
        name: "Ibrahim Mohamed",
        nameAr: "إبراهيم محمد",
        password: "ibrahimloveshabiba",
        role: "Super Admin"
    },
    {
        id: "2",
        email: "habiba@nugenee.com",
        name: "Habiba Mostafa",
        nameAr: "حبيبة مصطفى",
        password: "habibalovesibrahim",
        role: "Admin"
    }
];

export const getAdminByEmail = (email: string): Admin | undefined => {
    return admins.find(admin => admin.email === email);
};
