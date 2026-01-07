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
exports.PathProjectsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const path_projects_service_1 = require("./path-projects.service");
const create_path_project_dto_1 = require("./dto/create-path-project.dto");
const update_path_project_dto_1 = require("./dto/update-path-project.dto");
let PathProjectsController = class PathProjectsController {
    pathProjectsService;
    constructor(pathProjectsService) {
        this.pathProjectsService = pathProjectsService;
    }
    create(createPathProjectDto) {
        return this.pathProjectsService.create(createPathProjectDto);
    }
    findAll() {
        return this.pathProjectsService.findAll();
    }
    findOne(id) {
        return this.pathProjectsService.findByPath(id);
    }
    update(id, updatePathProjectDto) {
        return this.pathProjectsService.update(id, updatePathProjectDto);
    }
    remove(id) {
        return this.pathProjectsService.remove(id);
    }
};
exports.PathProjectsController = PathProjectsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create or update projects for a learning path' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: { id: 'slug', projects: [] } } }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_path_project_dto_1.CreatePathProjectDto]),
    __metadata("design:returntype", void 0)
], PathProjectsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all path projects grouped by path' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: [{ id: 'slug', projects: [] }] } }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PathProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all projects for a specific path by pathId (slug)' }),
    (0, swagger_1.ApiOkResponse)({ schema: { example: { id: 'slug', projects: [] } } }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PathProjectsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/path-project.entity").PathProject }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_path_project_dto_1.UpdatePathProjectDto]),
    __metadata("design:returntype", void 0)
], PathProjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/path-project.entity").PathProject }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PathProjectsController.prototype, "remove", null);
exports.PathProjectsController = PathProjectsController = __decorate([
    (0, swagger_1.ApiTags)('path-projects'),
    (0, common_1.Controller)('path-projects'),
    __metadata("design:paramtypes", [path_projects_service_1.PathProjectsService])
], PathProjectsController);
//# sourceMappingURL=path-projects.controller.js.map