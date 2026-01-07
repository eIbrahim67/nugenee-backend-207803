import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Course {
    @PrimaryColumn()
    id: string; // Slug

    @Column()
    title: string;

    @Column({ nullable: true })
    titleAr: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text', nullable: true })
    descriptionAr: string;

    @Column({ type: 'text' })
    overview: string;

    @Column({ type: 'text', nullable: true })
    overviewAr: string;

    @Column()
    level: string;

    @Column({ nullable: true })
    levelAr: string;

    @Column()
    duration: string;

    @Column({ nullable: true })
    durationAr: string;

    @Column({ nullable: true })
    schedule: string;

    @Column({ nullable: true })
    scheduleAr: string;

    @Column({ type: 'simple-array', nullable: true })
    skills: string[];

    @Column({ type: 'simple-array', nullable: true })
    skillsAr: string[];

    @Column({ type: 'simple-array', nullable: true })
    prerequisites: string[];

    @Column({ type: 'simple-array', nullable: true })
    prerequisitesAr: string[];

    @Column({ type: 'simple-array', nullable: true })
    tools: string[];

    @Column({ type: 'simple-array', nullable: true })
    objectives: string[];

    @Column({ type: 'simple-array', nullable: true })
    objectivesAr: string[];

    @Column({ nullable: true })
    certification: string;

    @Column({ nullable: true })
    certificationAr: string;

    @Column({ type: 'simple-array', nullable: true })
    targetAudience: string[];

    @Column({ type: 'simple-array', nullable: true })
    targetAudienceAr: string[];

    @Column({ nullable: true })
    color: string;

    @Column()
    categoryId: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @Column()
    instructorId: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'instructorId' })
    instructor: User;

    @Column({ default: true })
    active: boolean;

    @Column({ nullable: true })
    icon: string;
}
