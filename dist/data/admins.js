"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminByEmail = exports.admins = void 0;
exports.admins = [
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
const getAdminByEmail = (email) => {
    return exports.admins.find(admin => admin.email === email);
};
exports.getAdminByEmail = getAdminByEmail;
//# sourceMappingURL=admins.js.map