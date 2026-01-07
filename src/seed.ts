import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { admins } from '../data/admins';
import { instructors } from '../data/instructors';
import { COURSE_CATEGORIES, courses } from '../data/courses';
import { courseProjects } from '../data/courseProjects';
import { learningPaths } from '../data/learningPaths';
import { pathProjects } from '../data/pathProjects';
import { studentCertificates } from '../data/studentCertificates';
import { tableOfContent } from '../data/tableOfContent';

import { User } from './users/entities/user.entity';
import { Category } from './categories/entities/category.entity';
import { Course } from './courses/entities/course.entity';
import { CourseProject } from './course-projects/entities/course-project.entity';
import { LearningPath } from './learning-paths/entities/learning-path.entity';
import { PathProject } from './path-projects/entities/path-project.entity';
import { StudentCertificate } from './student-certificates/entities/student-certificate.entity';
import { CourseModule } from './course-content/entities/course-module.entity';
import { CourseLesson } from './course-content/entities/course-lesson.entity';

import { Role } from './users/enums/role.enum';
import * as bcrypt from 'bcrypt';

const ID_MAP: Record<string, string> = {
    'python-programming': 'python-for-all',
    'computer-basics': 'introduction-to-computer',
};

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const dataSource = app.get(DataSource);

    const userRepository = dataSource.getRepository(User);
    const categoryRepository = dataSource.getRepository(Category);
    const courseRepository = dataSource.getRepository(Course);
    const courseProjectRepository = dataSource.getRepository(CourseProject);
    const learningPathRepository = dataSource.getRepository(LearningPath);
    const pathProjectRepository = dataSource.getRepository(PathProject);
    const certificateRepository = dataSource.getRepository(StudentCertificate);
    const moduleRepository = dataSource.getRepository(CourseModule);
    const lessonRepository = dataSource.getRepository(CourseLesson);

    console.log('Seeding Admins...');
    for (const admin of admins) {
        const existing = await userRepository.findOneBy({ email: admin.email });
        if (!existing) {
            const password = await bcrypt.hash(admin.password, 10);
            await userRepository.save(userRepository.create({
                id: admin.id,
                email: admin.email,
                password,
                name: admin.name,
                nameAr: admin.nameAr,
                role: Role.ADMIN
            }));
        }
    }

    console.log('Seeding Instructors...');
    for (const inst of instructors) {
        const existing = await userRepository.findOneBy({ id: inst.id });
        if (!existing) {
            const password = await bcrypt.hash('instructor123', 10);
            await userRepository.save(userRepository.create({
                id: inst.id,
                email: `${inst.id}@nugenee.com`.toLowerCase(),
                password,
                name: inst.name,
                nameAr: inst.nameAr,
                role: Role.INSTRUCTOR,
                bio: inst.bio,
                bioAr: inst.bioAr,
                expertise: inst.expertise,
                expertiseAr: inst.expertiseAr,
                photo: inst.photo
            }));
        }
    }

    console.log('Seeding Categories...');
    for (const cat of COURSE_CATEGORIES) {
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
    for (const course of courses) {
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
    for (const cp of courseProjects) {
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
    for (const path of learningPaths) {
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
    for (const pp of pathProjects) {
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
    for (const cert of studentCertificates) {
        const existing = await certificateRepository.findOneBy({ id: cert.id });
        if (!existing) {
            await certificateRepository.save(certificateRepository.create(cert));
        }
    }

    console.log('Seeding Table of Content (Modules and Lessons)...');
    for (const toc of tableOfContent) {
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

                // Seed Lessons
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
