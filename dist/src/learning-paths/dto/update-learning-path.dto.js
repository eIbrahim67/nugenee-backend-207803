"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLearningPathDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_learning_path_dto_1 = require("./create-learning-path.dto");
class UpdateLearningPathDto extends (0, swagger_1.PartialType)(create_learning_path_dto_1.CreateLearningPathDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateLearningPathDto = UpdateLearningPathDto;
//# sourceMappingURL=update-learning-path.dto.js.map