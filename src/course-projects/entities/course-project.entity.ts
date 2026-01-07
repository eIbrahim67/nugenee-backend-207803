import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';

@Entity()
export class CourseProject {
    @PrimaryColumn()
    id: string;

    @Column()
    courseId: string;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'courseId' })
    course: Course;

    @Column()
    title: string;

    @Column({ nullable: true })
    titleAr: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text', nullable: true })
    descriptionAr: string;

    @Column({ nullable: true })
    image: string;

    @Column({ default: 0 })
    order: number;
}
