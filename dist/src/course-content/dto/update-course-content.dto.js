"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseContentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_course_content_dto_1 = require("./create-course-content.dto");
class UpdateCourseContentDto extends (0, swagger_1.PartialType)(create_course_content_dto_1.CreateCourseContentDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCourseContentDto = UpdateCourseContentDto;
//# sourceMappingURL=update-course-content.dto.js.map