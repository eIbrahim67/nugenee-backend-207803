import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCertificate } from './entities/student-certificate.entity.js';
import { CreateStudentCertificateDto } from './dto/create-student-certificate.dto';
import { UpdateStudentCertificateDto } from './dto/update-student-certificate.dto';

@Injectable()
export class StudentCertificatesService {
  constructor(
    @InjectRepository(StudentCertificate)
    private readonly certificateRepository: Repository<StudentCertificate>,
  ) { }

  create(createStudentCertificateDto: CreateStudentCertificateDto) {
    const certificate = this.certificateRepository.create(createStudentCertificateDto);
    return this.certificateRepository.save(certificate);
  }

  findAll() {
    return this.certificateRepository.find({
      order: { order: 'ASC' }
    });
  }

  async findOne(id: string) {
    const certificate = await this.certificateRepository.findOne({
      where: { id }
    });
    if (!certificate) {
      throw new NotFoundException(`Student Certificate with ID ${id} not found`);
    }
    return certificate;
  }

  async update(id: string, updateStudentCertificateDto: UpdateStudentCertificateDto) {
    const certificate = await this.findOne(id);
    const updated = this.certificateRepository.merge(certificate, updateStudentCertificateDto);
    return this.certificateRepository.save(updated);
  }

  async remove(id: string) {
    const certificate = await this.findOne(id);
    return this.certificateRepository.remove(certificate);
  }
}
