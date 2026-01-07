import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Course } from '../../courses/entities/course.entity.js';
import { CourseLesson } from './course-lesson.entity.js';

@Entity()
export class CourseModule {
    @PrimaryColumn()
    id: string;

    @Column()
    courseId: string;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'courseId' })
    course: Course;

    @Column({ default: 0 })
    order: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    titleAr: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text', nullable: true })
    descriptionAr: string;

    @Column()
    duration: string;

    @Column({ nullable: true })
    durationAr: string;

    @OneToMany(() => CourseLesson, (lesson) => lesson.module, { cascade: true })
    lessons: CourseLesson[];
}
