import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentCertificatesService } from './student-certificates.service';
import { CreateStudentCertificateDto } from './dto/create-student-certificate.dto';
import { UpdateStudentCertificateDto } from './dto/update-student-certificate.dto';

@Controller('student-certificates')
export class StudentCertificatesController {
  constructor(private readonly studentCertificatesService: StudentCertificatesService) { }

  @Post()
  create(@Body() createStudentCertificateDto: CreateStudentCertificateDto) {
    return this.studentCertificatesService.create(createStudentCertificateDto);
  }

  @Get()
  findAll() {
    return this.studentCertificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentCertificatesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentCertificateDto: UpdateStudentCertificateDto) {
    return this.studentCertificatesService.update(id, updateStudentCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentCertificatesService.remove(id);
  }
}
