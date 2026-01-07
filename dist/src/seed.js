"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_1 = require("typeorm");
const admins_1 = require("../data/admins");
const instructors_1 = require("../data/instructors");
const courses_1 = require("../data/courses");
const courseProjects_1 = require("../data/courseProjects");
const learningPaths_1 = require("../data/learningPaths");
const pathProjects_1 = require("../data/pathProjects");
const studentCertificates_1 = require("../data/studentCertificates");
const tableOfContent_1 = require("../data/tableOfContent");
const user_entity_1 = require("./users/entities/user.entity");
const category_entity_1 = require("./categories/entities/category.entity");
const course_entity_1 = require("./courses/entities/course.entity");
const course_project_entity_1 = require("./course-projects/entities/course-project.entity");
const learning_path_entity_1 = require("./learning-paths/entities/learning-path.entity");
const path_project_entity_1 = require("./path-projects/entities/path-project.entity");
const student_certificate_entity_1 = require("./student-certificates/entities/student-certificate.entity");
const course_module_entity_1 = require("./course-content/entities/course-module.entity");
const course_lesson_entity_1 = require("./course-content/entities/course-lesson.entity");
const role_enum_1 = require("./users/enums/role.enum");
const bcrypt = __importStar(require("bcrypt"));
const ID_MAP = {
    'python-programming': 'python-for-all',
    'computer-basics': 'introduction-to-computer',
};
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    const userRepository = dataSource.getRepository(user_entity_1.User);
    const categoryRepository = dataSource.getRepository(category_entity_1.Category);
    const courseRepository = dataSource.getRepository(course_entity_1.Course);
    const courseProjectRepository = dataSource.getRepository(course_project_entity_1.CourseProject);
    const learningPathRepository = dataSource.getRepository(learning_path_entity_1.LearningPath);
    const pathProjectRepository = dataSource.getRepository(path_project_entity_1.PathProject);
    const certificateRepository = dataSource.getRepository(student_certificate_entity_1.StudentCertificate);
    const moduleRepository = dataSource.getRepository(course_module_entity_1.CourseModule);
    const lessonRepository = dataSource.getRepository(course_lesson_entity_1.CourseLesson);
    console.log('Seeding Admins...');
    for (const admin of admins_1.admins) {
        const existing = await userRepository.findOneBy({ email: admin.email });
        if (!existing) {
            const password = await bcrypt.hash(admin.password, 10);
            await userRepository.save(userRepository.create({
                id: admin.id,
                email: admin.email,
                password,
                name: admin.name,
                nameAr: admin.nameAr,
                role: role_enum_1.Role.ADMIN
            }));
        }
    }
    console.log('Seeding Instructors...');
    for (const inst of instructors_1.instructors) {
        const existing = await userRepository.findOneBy({ id: inst.id });
        if (!existing) {
            const password = await bcrypt.hash('instructor123', 10);
            await userRepository.save(userRepository.create({
                id: inst.id,
                email: `${inst.id}@nugenee.com`.toLowerCase(),
                password,
                name: inst.name,
                nameAr: inst.nameAr,
                role: role_enum_1.Role.INSTRUCTOR,
                bio: inst.bio,
                bioAr: inst.bioAr,
                expertise: inst.expertise,
                expertiseAr: inst.expertiseAr,
                photo: inst.photo
            }));
        }
    }
    console.log('Seeding Categories...');
    for (const cat of courses_1.COURSE_CATEGORIES) {
        const existing = await categoryRepository.findOneBy({ id: cat.id });
        if (!existing) {
            await categoryRepository.save(categoryRepository.create({
                id: cat.id,
                title: cat.title,
                titleAr: cat.titleAr,
                description: cat.description,
                descriptionAr: cat.descriptionAr
            }));
        }
    }
    console.log('Seeding Courses...');
    for (const course of courses_1.courses) {
        const existing = await courseRepository.findOneBy({ id: course.id });
        if (!existing) {
            const { icon, ...courseData } = course;
            await courseRepository.save(courseRepository.create({
                ...courseData,
                icon: 'Default',
            }));
        }
    }
    console.log('Seeding Course Projects...');
    for (const cp of courseProjects_1.courseProjects) {
        const mappedId = ID_MAP[cp.courseId] || cp.courseId;
        const course = await courseRepository.findOneBy({ id: mappedId });
        if (course) {
            const existing = await courseProjectRepository.findOneBy({ id: cp.id });
            if (!existing) {
                await courseProjectRepository.save(courseProjectRepository.create({
                    ...cp,
                    courseId: mappedId
                }));
            }
        }
    }
    console.log('Seeding Learning Paths...');
    for (const path of learningPaths_1.learningPaths) {
        const existing = await learningPathRepository.findOneBy({ id: path.id });
        if (!existing) {
            const { icon, ...pathData } = path;
            await learningPathRepository.save(learningPathRepository.create({
                ...pathData,
                icon: 'Default',
            }));
        }
    }
    console.log('Seeding Path Projects...');
    for (const pp of pathProjects_1.pathProjects) {
        const mappedId = ID_MAP[pp.pathId] || pp.pathId;
        const path = await learningPathRepository.findOneBy({ id: mappedId });
        if (path) {
            const existing = await pathProjectRepository.findOneBy({ id: pp.id });
            if (!existing) {
                await pathProjectRepository.save(pathProjectRepository.create({
                    ...pp,
                    pathId: mappedId
                }));
            }
        }
    }
    console.log('Seeding Student Certificates...');
    for (const cert of studentCertificates_1.studentCertificates) {
        const existing = await certificateRepository.findOneBy({ id: cert.id });
        if (!existing) {
            await certificateRepository.save(certificateRepository.create(cert));
        }
    }
    console.log('Seeding Table of Content (Modules and Lessons)...');
    for (const toc of tableOfContent_1.tableOfContent) {
        const mappedId = ID_MAP[toc.id] || toc.id;
        const course = await courseRepository.findOneBy({ id: mappedId });
        if (course) {
            for (const mod of toc.courseModules) {
                let module = await moduleRepository.findOne({
                    where: { id: mod.id },
                    relations: ['lessons']
                });
                if (!module) {
                    const { lessons, ...moduleData } = mod;
                    module = await moduleRepository.save(moduleRepository.create({
                        ...moduleData,
                        courseId: mappedId,
                    }));
                }
                for (const lesson of mod.lessons) {
                    const existingLesson = await lessonRepository.findOneBy({ id: lesson.id });
                    if (!existingLesson) {
                        await lessonRepository.save(lessonRepository.create({
                            ...lesson,
                            moduleId: module.id
                        }));
                    }
                }
            }
        }
    }
    console.log('Seeding Complete!');
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed.js.map