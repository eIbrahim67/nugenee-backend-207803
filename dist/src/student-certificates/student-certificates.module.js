"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCertificatesModule = void 0;
const common_1 = require("@nestjs/common");
const student_certificates_service_1 = require("./student-certificates.service");
const student_certificates_controller_1 = require("./student-certificates.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_certificate_entity_1 = require("./entities/student-certificate.entity");
let StudentCertificatesModule = class StudentCertificatesModule {
};
exports.StudentCertificatesModule = StudentCertificatesModule;
exports.StudentCertificatesModule = StudentCertificatesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([student_certificate_entity_1.StudentCertificate])],
        controllers: [student_certificates_controller_1.StudentCertificatesController],
        providers: [student_certificates_service_1.StudentCertificatesService],
        exports: [typeorm_1.TypeOrmModule],
    })
], StudentCertificatesModule);
//# sourceMappingURL=student-certificates.module.js.map