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
exports.CourseContentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_content_service_1 = require("./course-content.service");
const create_course_content_dto_1 = require("./dto/create-course-content.dto");
const update_course_content_dto_1 = require("./dto/update-course-content.dto");
let CourseContentController = class CourseContentController {
    courseContentService;
    constructor(courseContentService) {
        this.courseContentService = courseContentService;
    }
    create(createCourseContentDto) {
        return this.courseContentService.create(createCourseContentDto);
    }
    findAll() {
        return this.courseContentService.findAll();
    }
    findOne(id) {
        return this.courseContentService.findByCourse(id);
    }
    update(id, updateCourseContentDto) {
        return this.courseContentService.update(id, updateCourseContentDto);
    }
    remove(id) {
        return this.courseContentService.remove(id);
    }
};
exports.CourseContentController = CourseContentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create or update the entire Table of Contents for a course' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: { id: 'slug', courseModules: [] } } }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_course_content_dto_1.CreateCourseContentDto]),
    __metadata("design:returntype", void 0)
], CourseContentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all courses table of contents' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: [{ id: 'slug', courseModules: [] }] } }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseContentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get the whole Table of Contents for a course by courseId (slug)' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: { id: 'slug', courseModules: [] } } }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseContentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/course-module.entity").CourseModule }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_course_content_dto_1.UpdateCourseContentDto]),
    __metadata("design:returntype", void 0)
], CourseContentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/course-module.entity").CourseModule }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseContentController.prototype, "remove", null);
exports.CourseContentController = CourseContentController = __decorate([
    (0, swagger_1.ApiTags)('course-content'),
    (0, common_1.Controller)('course-content'),
    __metadata("design:paramtypes", [course_content_service_1.CourseContentService])
], CourseContentController);
//# sourceMappingURL=course-content.controller.js.map