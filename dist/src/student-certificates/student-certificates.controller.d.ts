import { StudentCertificatesService } from './student-certificates.service';
import { CreateStudentCertificateDto } from './dto/create-student-certificate.dto';
import { UpdateStudentCertificateDto } from './dto/update-student-certificate.dto';
export declare class StudentCertificatesController {
    private readonly studentCertificatesService;
    constructor(studentCertificatesService: StudentCertificatesService);
    create(createStudentCertificateDto: CreateStudentCertificateDto): Promise<import("./entities/student-certificate.entity").StudentCertificate>;
    findAll(): Promise<import("./entities/student-certificate.entity").StudentCertificate[]>;
    findOne(id: string): Promise<import("./entities/student-certificate.entity").StudentCertificate>;
    update(id: string, updateStudentCertificateDto: UpdateStudentCertificateDto): Promise<import("./entities/student-certificate.entity").StudentCertificate>;
    remove(id: string): Promise<import("./entities/student-certificate.entity").StudentCertificate>;
}
