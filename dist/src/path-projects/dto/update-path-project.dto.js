"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePathProjectDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_path_project_dto_1 = require("./create-path-project.dto");
class UpdatePathProjectDto extends (0, swagger_1.PartialType)(create_path_project_dto_1.CreatePathProjectDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePathProjectDto = UpdatePathProjectDto;
//# sourceMappingURL=update-path-project.dto.js.map