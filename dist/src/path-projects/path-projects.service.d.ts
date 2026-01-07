import { Repository } from 'typeorm';
import { PathProject } from './entities/path-project.entity.js';
import { CreatePathProjectDto } from './dto/create-path-project.dto';
import { UpdatePathProjectDto } from './dto/update-path-project.dto';
export declare class PathProjectsService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<PathProject>);
    create(createPathProjectDto: CreatePathProjectDto): Promise<{
        id: string;
        projects: PathProject[];
    }>;
    findAll(): Promise<{
        id: string;
        projects: PathProject[];
    }[]>;
    findByPath(pathId: string): Promise<{
        id: string;
        projects: PathProject[];
    }>;
    findOne(id: string): Promise<PathProject>;
    update(id: string, updatePathProjectDto: UpdatePathProjectDto): Promise<PathProject>;
    remove(id: string): Promise<PathProject>;
}
