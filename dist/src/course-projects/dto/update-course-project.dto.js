"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseProjectDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_course_project_dto_1 = require("./create-course-project.dto");
class UpdateCourseProjectDto extends (0, swagger_1.PartialType)(create_course_project_dto_1.CreateCourseProjectDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCourseProjectDto = UpdateCourseProjectDto;
//# sourceMappingURL=update-course-project.dto.js.map