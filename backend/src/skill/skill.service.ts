import { SkillEntity } from './skill.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private skillRepository: Repository<SkillEntity>,
    ) { }

    findAll(): Promise<SkillEntity[]> {
        console.log(this.skillRepository.metadata.tableName);
        try {
            return this.skillRepository.query('SELECT * FROM public.skills');
        } catch (err) {
            console.error('DB ERROR 👉', err);
            throw err;
        }
        return this.skillRepository.find();
    }

    findOne(id: number): Promise<SkillEntity | null> {
        return this.skillRepository.findOneBy({ id });
    }

    insert(skill: Partial<SkillEntity>): Promise<SkillEntity> {
        const newSkill = this.skillRepository.create(skill);
        return this.skillRepository.save(newSkill);
    }

    update(id: number, skill: Partial<SkillEntity>): Promise<SkillEntity> {
        return this.skillRepository.save({ ...skill, id });
    }

    async remove(id: number): Promise<void> {
        await this.skillRepository.delete(id);
    }
}
