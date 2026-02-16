import { SkillEntity } from './skill.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private usersRepository: Repository<SkillEntity>,
    ) { }

    findAll(): Promise<SkillEntity[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<SkillEntity | null> {
        return this.usersRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
