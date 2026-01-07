import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { LearningPath } from '../../learning-paths/entities/learning-path.entity';

@Entity()
export class PathProject {
    @PrimaryColumn()
    id: string;

    @Column()
    pathId: string;

    @ManyToOne(() => LearningPath)
    @JoinColumn({ name: 'pathId' })
    path: LearningPath;

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
