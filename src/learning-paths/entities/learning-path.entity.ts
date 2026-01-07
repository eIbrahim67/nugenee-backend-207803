import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class LearningPath {
    @PrimaryColumn()
    id: string;

    @Column({ nullable: true })
    icon: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    nameAr: string;

    @Column()
    subtitle: string;

    @Column({ nullable: true })
    subtitleAr: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text', nullable: true })
    descriptionAr: string;

    @Column({ type: 'text' })
    goal: string;

    @Column({ type: 'text', nullable: true })
    goalAr: string;

    @Column()
    duration: string;

    @Column({ nullable: true })
    durationAr: string;

    @Column()
    difficulty: string;

    @Column({ nullable: true })
    difficultyAr: string;

    @Column({ nullable: true })
    color: string;

    @Column({ type: 'jsonb', default: [] })
    courses: { courseId: string; orderInPath: number; isOptional?: boolean }[];

    @Column({ type: 'simple-array', nullable: true })
    outcomes: string[];

    @Column({ type: 'simple-array', nullable: true })
    outcomesAr: string[];

    @Column({ default: false })
    isCustomizable: boolean;

    @Column({ default: false })
    featured: boolean;
}
