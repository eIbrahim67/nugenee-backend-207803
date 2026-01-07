"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const course_projects_service_1 = require("./course-projects.service");
const course_projects_controller_1 = require("./course-projects.controller");
const typeorm_1 = require("@nestjs/typeorm");
const course_project_entity_1 = require("./entities/course-project.entity");
let CourseProjectsModule = class CourseProjectsModule {
};
exports.CourseProjectsModule = CourseProjectsModule;
exports.CourseProjectsModule = CourseProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([course_project_entity_1.CourseProject])],
        controllers: [course_projects_controller_1.CourseProjectsController],
        providers: [course_projects_service_1.CourseProjectsService],
        exports: [typeorm_1.TypeOrmModule],
    })
], CourseProjectsModule);
//# sourceMappingURL=course-projects.module.js.map