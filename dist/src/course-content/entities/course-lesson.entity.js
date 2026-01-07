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
exports.CourseLesson = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const course_module_entity_js_1 = require("./course-module.entity.js");
let CourseLesson = class CourseLesson {
    id;
    moduleId;
    module;
    order;
    title;
    titleAr;
    type;
    duration;
    durationAr;
    objectives;
    objectivesAr;
    isPreview;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, moduleId: { required: true, type: () => String }, module: { required: true, type: () => require("./course-module.entity").CourseModule }, order: { required: true, type: () => Number }, title: { required: true, type: () => String }, titleAr: { required: true, type: () => String }, type: { required: true, type: () => String }, duration: { required: true, type: () => String }, durationAr: { required: true, type: () => String }, objectives: { required: true, type: () => [String] }, objectivesAr: { required: true, type: () => [String] }, isPreview: { required: true, type: () => Boolean } };
    }
};
exports.CourseLesson = CourseLesson;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], CourseLesson.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseLesson.prototype, "moduleId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_module_entity_js_1.CourseModule, (module) => module.lessons),
    (0, typeorm_1.JoinColumn)({ name: 'moduleId' }),
    __metadata("design:type", course_module_entity_js_1.CourseModule)
], CourseLesson.prototype, "module", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CourseLesson.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseLesson.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseLesson.prototype, "titleAr", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['video', 'article', 'hands-on', 'quiz', 'project'],
        default: 'video',
    }),
    __metadata("design:type", String)
], CourseLesson.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseLesson.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseLesson.prototype, "durationAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], CourseLesson.prototype, "objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], CourseLesson.prototype, "objectivesAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CourseLesson.prototype, "isPreview", void 0);
exports.CourseLesson = CourseLesson = __decorate([
    (0, typeorm_1.Entity)()
], CourseLesson);
//# sourceMappingURL=course-lesson.entity.js.map