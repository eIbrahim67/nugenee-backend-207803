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
exports.CourseProject = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const course_entity_1 = require("../../courses/entities/course.entity");
let CourseProject = class CourseProject {
    id;
    courseId;
    course;
    title;
    titleAr;
    description;
    descriptionAr;
    image;
    order;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, courseId: { required: true, type: () => String }, course: { required: true, type: () => require("../../courses/entities/course.entity").Course }, title: { required: true, type: () => String }, titleAr: { required: true, type: () => String }, description: { required: true, type: () => String }, descriptionAr: { required: true, type: () => String }, image: { required: true, type: () => String }, order: { required: true, type: () => Number } };
    }
};
exports.CourseProject = CourseProject;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], CourseProject.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseProject.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.Course)
], CourseProject.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseProject.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseProject.prototype, "titleAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CourseProject.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CourseProject.prototype, "descriptionAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseProject.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CourseProject.prototype, "order", void 0);
exports.CourseProject = CourseProject = __decorate([
    (0, typeorm_1.Entity)()
], CourseProject);
//# sourceMappingURL=course-project.entity.js.map