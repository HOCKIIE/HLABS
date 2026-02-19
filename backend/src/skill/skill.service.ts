import { SkillEntity } from './skill.entity';
import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { Response } from 'express';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private skillRepository: Repository<SkillEntity>,
    ) { }

    findAll(
        display?: string
    ): Promise<SkillEntity[]> {
        try {

            const query = this.skillRepository.createQueryBuilder('skills');
            if (display !== undefined) query.where('skills.display = :display', { display });

            return query.getMany();

        } catch (err) {
            console.error('DB ERROR 👉', err);
            throw err;
        }
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
