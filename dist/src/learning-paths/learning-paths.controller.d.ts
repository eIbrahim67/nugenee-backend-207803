import { LearningPathsService } from './learning-paths.service';
import { CreateLearningPathDto } from './dto/create-learning-path.dto';
import { UpdateLearningPathDto } from './dto/update-learning-path.dto';
export declare class LearningPathsController {
    private readonly learningPathsService;
    constructor(learningPathsService: LearningPathsService);
    create(createLearningPathDto: CreateLearningPathDto): Promise<import("./entities/learning-path.entity").LearningPath>;
    findAll(): Promise<import("./entities/learning-path.entity").LearningPath[]>;
    findOne(id: string): Promise<import("./entities/learning-path.entity").LearningPath>;
    update(id: string, updateLearningPathDto: UpdateLearningPathDto): Promise<import("./entities/learning-path.entity").LearningPath>;
    remove(id: string): Promise<import("./entities/learning-path.entity").LearningPath>;
}
