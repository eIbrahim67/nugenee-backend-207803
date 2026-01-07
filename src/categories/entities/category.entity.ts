import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Category {
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
}
