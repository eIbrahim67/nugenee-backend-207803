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
exports.CourseModule = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const course_entity_js_1 = require("../../courses/entities/course.entity.js");
const course_lesson_entity_js_1 = require("./course-lesson.entity.js");
let CourseModule = class CourseModule {
    id;
    courseId;
    course;
    order;
    title;
    titleAr;
    description;
    descriptionAr;
    duration;
    durationAr;
    lessons;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, courseId: { required: true, type: () => String }, course: { required: true, type: () => require("../../courses/entities/course.entity").Course }, order: { required: true, type: () => Number }, title: { required: true, type: () => String }, titleAr: { required: true, type: () => String }, description: { required: true, type: () => String }, descriptionAr: { required: true, type: () => String }, duration: { required: true, type: () => String }, durationAr: { required: true, type: () => String }, lessons: { required: true, type: () => [require("./course-lesson.entity").CourseLesson] } };
    }
};
exports.CourseModule = CourseModule;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], CourseModule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseModule.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_js_1.Course),
    (0, typeorm_1.JoinColumn)({ name: 'courseId' }),
    __metadata("design:type", course_entity_js_1.Course)
], CourseModule.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CourseModule.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseModule.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseModule.prototype, "titleAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CourseModule.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CourseModule.prototype, "descriptionAr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseModule.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseModule.prototype, "durationAr", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_lesson_entity_js_1.CourseLesson, (lesson) => lesson.module, { cascade: true }),
    __metadata("design:type", Array)
], CourseModule.prototype, "lessons", void 0);
exports.CourseModule = CourseModule = __decorate([
    (0, typeorm_1.Entity)()
], CourseModule);
//# sourceMappingURL=course-module.entity.js.map