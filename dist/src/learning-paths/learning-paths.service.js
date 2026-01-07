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
exports.LearningPathsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const learning_path_entity_js_1 = require("./entities/learning-path.entity.js");
let LearningPathsService = class LearningPathsService {
    pathRepository;
    constructor(pathRepository) {
        this.pathRepository = pathRepository;
    }
    create(createLearningPathDto) {
        const path = this.pathRepository.create(createLearningPathDto);
        return this.pathRepository.save(path);
    }
    findAll() {
        return this.pathRepository.find();
    }
    async findOne(id) {
        const path = await this.pathRepository.findOne({
            where: { id }
        });
        if (!path) {
            throw new common_1.NotFoundException(`Learning Path with ID ${id} not found`);
        }
        return path;
    }
    async update(id, updateLearningPathDto) {
        const path = await this.findOne(id);
        const updated = this.pathRepository.merge(path, updateLearningPathDto);
        return this.pathRepository.save(updated);
    }
    async remove(id) {
        const path = await this.findOne(id);
        return this.pathRepository.remove(path);
    }
};
exports.LearningPathsService = LearningPathsService;
exports.LearningPathsService = LearningPathsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(learning_path_entity_js_1.LearningPath)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LearningPathsService);
//# sourceMappingURL=learning-paths.service.js.map