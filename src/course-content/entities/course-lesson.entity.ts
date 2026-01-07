import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CourseModule } from './course-module.entity.js';

@Entity()
export class CourseLesson {
    @PrimaryColumn()
    id: string;

    @Column()
    moduleId: string;

    @ManyToOne(() => CourseModule, (module) => module.lessons)
    @JoinColumn({ name: 'moduleId' })
    module: CourseModule;

    @Column({ default: 0 })
    order: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    titleAr: string;

    @Column({
        type: 'enum',
        enum: ['video', 'article', 'hands-on', 'quiz', 'project'],
        default: 'video',
    })
    type: string;

    @Column()
    duration: string;

    @Column({ nullable: true })
    durationAr: string;

    @Column({ type: 'simple-array', nullable: true })
    objectives: string[];

    @Column({ type: 'simple-array', nullable: true })
    objectivesAr: string[];

    @Column({ default: false })
    isPreview: boolean;
}
