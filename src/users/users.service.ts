import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { email, password, ...rest } = createUserDto;

        const existing = await this.usersRepository.findOneBy({ email });
        if (existing) {
            throw new ConflictException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({
            ...rest,
            email,
            password: hashedPassword,
        });

        return this.usersRepository.save(user);
    }

    findAll() {
        return this.usersRepository.find();
    }

    findOne(id: string) {
        return this.usersRepository.findOneBy({ id });
    }

    findByEmail(email: string) {
        return this.usersRepository.findOneBy({ email });
    }
}
