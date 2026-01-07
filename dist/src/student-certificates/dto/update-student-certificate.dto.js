"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentCertificateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_student_certificate_dto_1 = require("./create-student-certificate.dto");
class UpdateStudentCertificateDto extends (0, swagger_1.PartialType)(create_student_certificate_dto_1.CreateStudentCertificateDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateStudentCertificateDto = UpdateStudentCertificateDto;
//# sourceMappingURL=update-student-certificate.dto.js.map