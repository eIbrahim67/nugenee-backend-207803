import { PartialType } from '@nestjs/swagger';
import { CreateStudentCertificateDto } from './create-student-certificate.dto';

export class UpdateStudentCertificateDto extends PartialType(CreateStudentCertificateDto) {}
