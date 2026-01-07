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
exports.LearningPathsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const learning_paths_service_1 = require("./learning-paths.service");
const create_learning_path_dto_1 = require("./dto/create-learning-path.dto");
const update_learning_path_dto_1 = require("./dto/update-learning-path.dto");
let LearningPathsController = class LearningPathsController {
    learningPathsService;
    constructor(learningPathsService) {
        this.learningPathsService = learningPathsService;
    }
    create(createLearningPathDto) {
        return this.learningPathsService.create(createLearningPathDto);
    }
    findAll() {
        return this.learningPathsService.findAll();
    }
    findOne(id) {
        return this.learningPathsService.findOne(id);
    }
    update(id, updateLearningPathDto) {
        return this.learningPathsService.update(id, updateLearningPathDto);
    }
    remove(id) {
        return this.learningPathsService.remove(id);
    }
};
exports.LearningPathsController = LearningPathsController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/learning-path.entity").LearningPath }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_learning_path_dto_1.CreateLearningPathDto]),
    __metadata("design:returntype", void 0)
], LearningPathsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/learning-path.entity").LearningPath] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LearningPathsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/learning-path.entity").LearningPath }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LearningPathsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/learning-path.entity").LearningPath }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_learning_path_dto_1.UpdateLearningPathDto]),
    __metadata("design:returntype", void 0)
], LearningPathsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/learning-path.entity").LearningPath }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LearningPathsController.prototype, "remove", null);
exports.LearningPathsController = LearningPathsController = __decorate([
    (0, common_1.Controller)('learning-paths'),
    __metadata("design:paramtypes", [learning_paths_service_1.LearningPathsService])
], LearningPathsController);
//# sourceMappingURL=learning-paths.controller.js.map