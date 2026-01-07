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
exports.LearningPath = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let LearningPath = class LearningPath {
    id;
    icon;
    name;
    nameAr;
    subtitle;
    subtitleAr;
    description;
    descriptionAr;
    goal;
    goalAr;
    duration;
    durationAr;
    difficulty;
    difficultyAr;
    color;
    courses;
    outcomes;
    outcomesAr;
    isCustomizable;
    featured;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, icon: { required: true, type: () => String }, name: { required: true, type: () => String }, nameAr: { required: true, type: () => String }, subtitle: { required: true, type: () => String }, subtitleAr: { required: true, type: () => String }, description: { required: true, type: () => String }, descriptionAr: { required: true, type: () => String }, goal: { required: true, type: () => String }, goalAr: { required: true, type: () => String }, duration: { required: true, type: () => String }, durationAr: { required: true, type: () => String }, difficulty: { required: true, type: () => String }, difficultyAr: { required: true, type: () => String }, color: { required: true, type: () => String }, courses: { required: true, type: () => [({ courseId: { required: true, type: () => String }, orderInPath: { required: true, type: () => Number }, isOptional: { required: false, type: () => Boolean } })] }, outcomes: { required: true, type: () => [String] }, outcomesAr: { required: true, type: () => [String] }, isCustomizable: { required: true, type: () => Boolean }, featured: { required: true, type: () => Boolean } };
    }
};
exports.LearningPath = LearningPath;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], LearningPath.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LearningPath.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "nameAr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LearningPath.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "subtitleAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], LearningPath.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "descriptionAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], LearningPath.prototype, "goal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "goalAr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LearningPath.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "durationAr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LearningPath.prototype, "difficulty", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "difficultyAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LearningPath.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb', default: [] }),
    __metadata("design:type", Array)
], LearningPath.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], LearningPath.prototype, "outcomes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], LearningPath.prototype, "outcomesAr", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], LearningPath.prototype, "isCustomizable", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], LearningPath.prototype, "featured", void 0);
exports.LearningPath = LearningPath = __decorate([
    (0, typeorm_1.Entity)()
], LearningPath);
//# sourceMappingURL=learning-path.entity.js.map