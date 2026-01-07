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
exports.PathProject = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const learning_path_entity_1 = require("../../learning-paths/entities/learning-path.entity");
let PathProject = class PathProject {
    id;
    pathId;
    path;
    title;
    titleAr;
    description;
    descriptionAr;
    image;
    order;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, pathId: { required: true, type: () => String }, path: { required: true, type: () => require("../../learning-paths/entities/learning-path.entity").LearningPath }, title: { required: true, type: () => String }, titleAr: { required: true, type: () => String }, description: { required: true, type: () => String }, descriptionAr: { required: true, type: () => String }, image: { required: true, type: () => String }, order: { required: true, type: () => Number } };
    }
};
exports.PathProject = PathProject;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PathProject.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PathProject.prototype, "pathId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => learning_path_entity_1.LearningPath),
    (0, typeorm_1.JoinColumn)({ name: 'pathId' }),
    __metadata("design:type", learning_path_entity_1.LearningPath)
], PathProject.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PathProject.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PathProject.prototype, "titleAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], PathProject.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PathProject.prototype, "descriptionAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PathProject.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PathProject.prototype, "order", void 0);
exports.PathProject = PathProject = __decorate([
    (0, typeorm_1.Entity)()
], PathProject);
//# sourceMappingURL=path-project.entity.js.map