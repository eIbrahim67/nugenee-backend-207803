"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseContentModule = void 0;
const common_1 = require("@nestjs/common");
const course_content_service_1 = require("./course-content.service");
const course_content_controller_1 = require("./course-content.controller");
const typeorm_1 = require("@nestjs/typeorm");
const course_module_entity_js_1 = require("./entities/course-module.entity.js");
const course_lesson_entity_js_1 = require("./entities/course-lesson.entity.js");
let CourseContentModule = class CourseContentModule {
};
exports.CourseContentModule = CourseContentModule;
exports.CourseContentModule = CourseContentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_module_entity_js_1.CourseModule, course_lesson_entity_js_1.CourseLesson])],
        controllers: [course_content_controller_1.CourseContentController],
        providers: [course_content_service_1.CourseContentService],
        exports: [typeorm_1.TypeOrmModule],
    })
], CourseContentModule);
//# sourceMappingURL=course-content.module.js.map