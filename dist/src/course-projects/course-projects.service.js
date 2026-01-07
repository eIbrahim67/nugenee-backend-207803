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
exports.CourseProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_project_entity_js_1 = require("./entities/course-project.entity.js");
let CourseProjectsService = class CourseProjectsService {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async create(createCourseProjectDto) {
        const { id: courseId, projects } = createCourseProjectDto;
        for (const projectData of projects) {
            let project = await this.projectRepository.findOneBy({ id: projectData.id });
            if (project) {
                this.projectRepository.merge(project, { ...projectData, courseId });
            }
            else {
                project = this.projectRepository.create({ ...projectData, courseId });
            }
            await this.projectRepository.save(project);
        }
        return this.findByCourse(courseId);
    }
    async findAll() {
        const projects = await this.projectRepository.find({
            order: { courseId: 'ASC', order: 'ASC' }
        });
        const grouped = projects.reduce((acc, proj) => {
            const courseId = proj.courseId;
            if (!acc[courseId]) {
                acc[courseId] = {
                    id: courseId,
                    projects: []
                };
            }
            acc[courseId].projects.push(proj);
            return acc;
        }, {});
        return Object.values(grouped);
    }
    async findByCourse(courseId) {
        const projects = await this.projectRepository.find({
            where: { courseId },
            order: { order: 'ASC' }
        });
        if (!projects || projects.length === 0) {
            throw new common_1.NotFoundException(`No projects found for course ID ${courseId}`);
        }
        return {
            id: courseId,
            projects
        };
    }
    async findOne(id) {
        const project = await this.projectRepository.findOne({
            where: { id },
            relations: ['course']
        });
        if (!project) {
            throw new common_1.NotFoundException(`Course Project with ID ${id} not found`);
        }
        return project;
    }
    async update(id, updateCourseProjectDto) {
        const project = await this.findOne(id);
        const updated = this.projectRepository.merge(project, updateCourseProjectDto);
        return this.projectRepository.save(updated);
    }
    async remove(id) {
        const project = await this.findOne(id);
        return this.projectRepository.remove(project);
    }
};
exports.CourseProjectsService = CourseProjectsService;
exports.CourseProjectsService = CourseProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_project_entity_js_1.CourseProject)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CourseProjectsService);
//# sourceMappingURL=course-projects.service.js.map