import { SkillEntity } from './skill.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private usersRepository: Repository<SkillEntity>,
    ) {}

    findAll(): Promise<SkillEntity[]> {
        return this.usersRepository.find({
            where:{ is_active: true }
        });
    }

    findOne(id: number): Promise<SkillEntity | null> {
        return this.usersRepository.findOneBy({ id });
    }

    insert(skill: Partial<SkillEntity>): Promise<SkillEntity> {
        const newSkill = this.usersRepository.create(skill);
        return this.usersRepository.save(newSkill);
    }

    update(id: number, skill: Partial<SkillEntity>): Promise<SkillEntity> {
        return this.usersRepository.save({ ...skill, id });
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
