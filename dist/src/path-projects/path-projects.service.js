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
exports.PathProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const path_project_entity_js_1 = require("./entities/path-project.entity.js");
let PathProjectsService = class PathProjectsService {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async create(createPathProjectDto) {
        const { id: pathId, projects } = createPathProjectDto;
        for (const projectData of projects) {
            let project = await this.projectRepository.findOneBy({ id: projectData.id });
            if (project) {
                this.projectRepository.merge(project, { ...projectData, pathId });
            }
            else {
                project = this.projectRepository.create({ ...projectData, pathId });
            }
            await this.projectRepository.save(project);
        }
        return this.findByPath(pathId);
    }
    async findAll() {
        const projects = await this.projectRepository.find({
            order: { pathId: 'ASC', order: 'ASC' }
        });
        const grouped = projects.reduce((acc, proj) => {
            const pathId = proj.pathId;
            if (!acc[pathId]) {
                acc[pathId] = {
                    id: pathId,
                    projects: []
                };
            }
            acc[pathId].projects.push(proj);
            return acc;
        }, {});
        return Object.values(grouped);
    }
    async findByPath(pathId) {
        const projects = await this.projectRepository.find({
            where: { pathId },
            order: { order: 'ASC' }
        });
        if (!projects || projects.length === 0) {
            throw new common_1.NotFoundException(`No projects found for learning path ID ${pathId}`);
        }
        return {
            id: pathId,
            projects
        };
    }
    async findOne(id) {
        const project = await this.projectRepository.findOne({
            where: { id },
            relations: ['path']
        });
        if (!project) {
            throw new common_1.NotFoundException(`Path Project with ID ${id} not found`);
        }
        return project;
    }
    async update(id, updatePathProjectDto) {
        const project = await this.findOne(id);
        const updated = this.projectRepository.merge(project, updatePathProjectDto);
        return this.projectRepository.save(updated);
    }
    async remove(id) {
        const project = await this.findOne(id);
        return this.projectRepository.remove(project);
    }
};
exports.PathProjectsService = PathProjectsService;
exports.PathProjectsService = PathProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(path_project_entity_js_1.PathProject)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PathProjectsService);
//# sourceMappingURL=path-projects.service.js.map