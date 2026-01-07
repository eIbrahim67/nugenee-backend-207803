import { Repository } from 'typeorm';
import { StudentCertificate } from './entities/student-certificate.entity.js';
import { CreateStudentCertificateDto } from './dto/create-student-certificate.dto';
import { UpdateStudentCertificateDto } from './dto/update-student-certificate.dto';
export declare class StudentCertificatesService {
    private readonly certificateRepository;
    constructor(certificateRepository: Repository<StudentCertificate>);
    create(createStudentCertificateDto: CreateStudentCertificateDto): Promise<StudentCertificate>;
    findAll(): Promise<StudentCertificate[]>;
    findOne(id: string): Promise<StudentCertificate>;
    update(id: string, updateStudentCertificateDto: UpdateStudentCertificateDto): Promise<StudentCertificate>;
    remove(id: string): Promise<StudentCertificate>;
}
