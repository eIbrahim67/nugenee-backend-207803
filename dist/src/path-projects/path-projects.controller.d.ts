import { PathProjectsService } from './path-projects.service';
import { CreatePathProjectDto } from './dto/create-path-project.dto';
import { UpdatePathProjectDto } from './dto/update-path-project.dto';
export declare class PathProjectsController {
    private readonly pathProjectsService;
    constructor(pathProjectsService: PathProjectsService);
    create(createPathProjectDto: CreatePathProjectDto): Promise<{
        id: string;
        projects: import("./entities/path-project.entity").PathProject[];
    }>;
    findAll(): Promise<{
        id: string;
        projects: import("./entities/path-project.entity").PathProject[];
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        projects: import("./entities/path-project.entity").PathProject[];
    }>;
    update(id: string, updatePathProjectDto: UpdatePathProjectDto): Promise<import("./entities/path-project.entity").PathProject>;
    remove(id: string): Promise<import("./entities/path-project.entity").PathProject>;
}
