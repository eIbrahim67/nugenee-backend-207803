import { Module } from '@nestjs/common';
import { StudentCertificatesService } from './student-certificates.service';
import { StudentCertificatesController } from './student-certificates.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCertificate } from './entities/student-certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCertificate])],
  controllers: [StudentCertificatesController],
  providers: [StudentCertificatesService],
  exports: [TypeOrmModule],
})
export class StudentCertificatesModule { }
