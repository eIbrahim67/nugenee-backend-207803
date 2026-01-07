import { Repository } from 'typeorm';
import { LearningPath } from './entities/learning-path.entity.js';
import { CreateLearningPathDto } from './dto/create-learning-path.dto';
import { UpdateLearningPathDto } from './dto/update-learning-path.dto';
export declare class LearningPathsService {
    private readonly pathRepository;
    constructor(pathRepository: Repository<LearningPath>);
    create(createLearningPathDto: CreateLearningPathDto): Promise<LearningPath>;
    findAll(): Promise<LearningPath[]>;
    findOne(id: string): Promise<LearningPath>;
    update(id: string, updateLearningPathDto: UpdateLearningPathDto): Promise<LearningPath>;
    remove(id: string): Promise<LearningPath>;
}
