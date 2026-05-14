import { SkillEntity } from './skill.entity';
import { Injectable, Res, Query, Inject, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { CACHE_TTL, CACHE_KEYS } from '../common/cache.constants';

@Injectable()
export class SkillService {

    private readonly logger = new Logger(SkillService.name);
    
    constructor(
        @InjectRepository(SkillEntity)
        private skillRepository: Repository<SkillEntity>,
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
    ) {

    }

    async findAll(
        @Query('display') display: string
    ): Promise<SkillEntity[]> {
        try {
            const cacheKey = CACHE_KEYS.SKILLS + `:all`;
            const cached = await this.cacheManager.get<SkillEntity[]>(cacheKey);
            if (cached) {
                return cached;
            }

            const query = this.skillRepository.createQueryBuilder('skills');
            if (display) {
                const displayValues = display.split(',').map(value => value.trim());
                query.andWhere(`string_to_array(skills.display, ',') && ARRAY[:...values]`, { values: displayValues });
            }
            const data = await query.getMany();

            if (data) await this.cacheManager.set(cacheKey, data, CACHE_TTL);
            return data;


        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }

    async findOne(id: number): Promise<SkillEntity | null> {
        try {
            const cacheKey = CACHE_KEYS.SKILLS + `:${id}`;

            const cached = await this.cacheManager.get<SkillEntity>(cacheKey);
            console.log(`Cache check for key:${id}`);
            if (cached) {
                console.log('Cache hit:', cached);
                return cached;
            }

            const data = await this.skillRepository.findOneBy({ id });
            if (data) await this.cacheManager.set(cacheKey, data, CACHE_TTL);
            return data;

        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }

    insert(skill: Partial<SkillEntity>): Promise<SkillEntity> {
        try {
            const newSkill = this.skillRepository.create(skill);
            return this.skillRepository.save(newSkill);
        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }

    update(id: number, skill: Partial<SkillEntity>): Promise<SkillEntity> {
        try {
            return this.skillRepository.save({ ...skill, id });
        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }

    async remove(id: number): Promise<void> {
        try {
            await this.skillRepository.delete(id);
        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }
}
