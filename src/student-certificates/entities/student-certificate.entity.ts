import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class StudentCertificate {
    @PrimaryColumn()
    id: string;

    @Column()
    studentName: string;

    @Column({ nullable: true })
    studentNameAr: string;

    @Column()
    courseName: string;

    @Column({ nullable: true })
    courseNameAr: string;

    @Column({ nullable: true })
    certificateImage: string;

    @Column()
    achievement: string;

    @Column({ nullable: true })
    achievementAr: string;

    @Column()
    date: string;

    @Column({ default: 0 })
    order: number;
}
