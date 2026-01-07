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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseProjectsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const course_projects_service_1 = require("./course-projects.service");
const create_course_project_dto_1 = require("./dto/create-course-project.dto");
const update_course_project_dto_1 = require("./dto/update-course-project.dto");
const swagger_1 = require("@nestjs/swagger");
let CourseProjectsController = class CourseProjectsController {
    courseProjectsService;
    constructor(courseProjectsService) {
        this.courseProjectsService = courseProjectsService;
    }
    create(createCourseProjectDto) {
        return this.courseProjectsService.create(createCourseProjectDto);
    }
    findAll() {
        return this.courseProjectsService.findAll();
    }
    findOne(id) {
        return this.courseProjectsService.findByCourse(id);
    }
    update(id, updateCourseProjectDto) {
        return this.courseProjectsService.update(id, updateCourseProjectDto);
    }
    remove(id) {
        return this.courseProjectsService.remove(id);
    }
};
exports.CourseProjectsController = CourseProjectsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create or update projects for a course' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: { id: 'slug', projects: [] } } }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_project_dto_1.CreateCourseProjectDto]),
    __metadata("design:returntype", void 0)
], CourseProjectsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all course projects grouped by course' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: [{ id: 'slug', projects: [] }] } }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all projects for a specific course by courseId (slug)' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: { id: 'slug', projects: [] } } }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseProjectsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/course-project.entity").CourseProject }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_course_project_dto_1.UpdateCourseProjectDto]),
    __metadata("design:returntype", void 0)
], CourseProjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/course-project.entity").CourseProject }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseProjectsController.prototype, "remove", null);
exports.CourseProjectsController = CourseProjectsController = __decorate([
    (0, common_1.Controller)('course-projects'),
    __metadata("design:paramtypes", [course_projects_service_1.CourseProjectsService])
], CourseProjectsController);
//# sourceMappingURL=course-projects.controller.js.map