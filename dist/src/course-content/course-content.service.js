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
exports.CourseContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_module_entity_js_1 = require("./entities/course-module.entity.js");
const course_lesson_entity_js_1 = require("./entities/course-lesson.entity.js");
let CourseContentService = class CourseContentService {
    moduleRepository;
    lessonRepository;
    constructor(moduleRepository, lessonRepository) {
        this.moduleRepository = moduleRepository;
        this.lessonRepository = lessonRepository;
    }
    async create(createCourseContentDto) {
        const { id: courseId, courseModules } = createCourseContentDto;
        for (const modData of courseModules) {
            const { lessons, ...moduleData } = modData;
            let module = await this.moduleRepository.findOneBy({ id: modData.id });
            if (module) {
                this.moduleRepository.merge(module, { ...moduleData, courseId });
            }
            else {
                module = this.moduleRepository.create({ ...moduleData, courseId });
            }
            await this.moduleRepository.save(module);
            for (const lessonData of lessons) {
                let lesson = await this.lessonRepository.findOneBy({ id: lessonData.id });
                if (lesson) {
                    this.lessonRepository.merge(lesson, { ...lessonData, moduleId: module.id });
                }
                else {
                    lesson = this.lessonRepository.create({ ...lessonData, moduleId: module.id });
                }
                await this.lessonRepository.save(lesson);
            }
        }
        return this.findByCourse(courseId);
    }
    async findAll() {
        const modules = await this.moduleRepository.find({
            relations: ['lessons'],
            order: { courseId: 'ASC', order: 'ASC' }
        });
        const grouped = modules.reduce((acc, mod) => {
            const courseId = mod.courseId;
            if (!acc[courseId]) {
                acc[courseId] = {
                    id: courseId,
                    courseModules: []
                };
            }
            acc[courseId].courseModules.push(mod);
            return acc;
        }, {});
        return Object.values(grouped);
    }
    async findByCourse(courseId) {
        const modules = await this.moduleRepository.find({
            where: { courseId },
            relations: ['lessons'],
            order: { order: 'ASC' }
        });
        if (!modules || modules.length === 0) {
            throw new common_1.NotFoundException(`No content found for course ID ${courseId}`);
        }
        return {
            id: courseId,
            courseModules: modules
        };
    }
    async findOne(id) {
        const module = await this.moduleRepository.findOne({
            where: { id },
            relations: ['course', 'lessons']
        });
        if (!module) {
            throw new common_1.NotFoundException(`Course Module with ID ${id} not found`);
        }
        return module;
    }
    async update(id, updateCourseContentDto) {
        const module = await this.findOne(id);
        const updated = this.moduleRepository.merge(module, updateCourseContentDto);
        return this.moduleRepository.save(updated);
    }
    async remove(id) {
        const module = await this.findOne(id);
        return this.moduleRepository.remove(module);
    }
};
exports.CourseContentService = CourseContentService;
exports.CourseContentService = CourseContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_module_entity_js_1.CourseModule)),
    __param(1, (0, typeorm_1.InjectRepository)(course_lesson_entity_js_1.CourseLesson)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CourseContentService);
//# sourceMappingURL=course-content.service.js.map