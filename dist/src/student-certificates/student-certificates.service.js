"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCertificatesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_certificate_entity_js_1 = require("./entities/student-certificate.entity.js");
let StudentCertificatesService = class StudentCertificatesService {
    certificateRepository;
    constructor(certificateRepository) {
        this.certificateRepository = certificateRepository;
    }
    create(createStudentCertificateDto) {
        const certificate = this.certificateRepository.create(createStudentCertificateDto);
        return this.certificateRepository.save(certificate);
    }
    findAll() {
        return this.certificateRepository.find({
            order: { order: 'ASC' }
        });
    }
    async findOne(id) {
        const certificate = await this.certificateRepository.findOne({
            where: { id }
        });
        if (!certificate) {
            throw new common_1.NotFoundException(`Student Certificate with ID ${id} not found`);
        }
        return certificate;
    }
    async update(id, updateStudentCertificateDto) {
        const certificate = await this.findOne(id);
        const updated = this.certificateRepository.merge(certificate, updateStudentCertificateDto);
        return this.certificateRepository.save(updated);
    }
    async remove(id) {
        const certificate = await this.findOne(id);
        return this.certificateRepository.remove(certificate);
    }
};
exports.StudentCertificatesService = StudentCertificatesService;
exports.StudentCertificatesService = StudentCertificatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_certificate_entity_js_1.StudentCertificate)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentCertificatesService);
//# sourceMappingURL=student-certificates.service.js.map