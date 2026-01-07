"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCertificate = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let StudentCertificate = class StudentCertificate {
    id;
    studentName;
    studentNameAr;
    courseName;
    courseNameAr;
    certificateImage;
    achievement;
    achievementAr;
    date;
    order;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, studentName: { required: true, type: () => String }, studentNameAr: { required: true, type: () => String }, courseName: { required: true, type: () => String }, courseNameAr: { required: true, type: () => String }, certificateImage: { required: true, type: () => String }, achievement: { required: true, type: () => String }, achievementAr: { required: true, type: () => String }, date: { required: true, type: () => String }, order: { required: true, type: () => Number } };
    }
};
exports.StudentCertificate = StudentCertificate;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], StudentCertificate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentCertificate.prototype, "studentName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentCertificate.prototype, "studentNameAr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentCertificate.prototype, "courseName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentCertificate.prototype, "courseNameAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentCertificate.prototype, "certificateImage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentCertificate.prototype, "achievement", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], StudentCertificate.prototype, "achievementAr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], StudentCertificate.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], StudentCertificate.prototype, "order", void 0);
exports.StudentCertificate = StudentCertificate = __decorate([
    (0, typeorm_1.Entity)()
], StudentCertificate);
//# sourceMappingURL=student-certificate.entity.js.map