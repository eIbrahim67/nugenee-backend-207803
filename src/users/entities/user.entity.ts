import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import { Role } from '../enums/role.enum';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
    @PrimaryColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    nameAr: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.STUDENT,
    })
    role: Role;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'jsonb', nullable: true })
    social: {
        linkedin?: string;
        twitter?: string;
        website?: string;
    };

    @Column({ type: 'text', nullable: true })
    bio: string;

    @Column({ type: 'text', nullable: true })
    bioAr: string;

    @Column({ type: 'simple-array', nullable: true })
    expertise: string[];

    @Column({ type: 'simple-array', nullable: true })
    expertiseAr: string[];

    @Column({ nullable: true })
    photo: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    generateId() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
