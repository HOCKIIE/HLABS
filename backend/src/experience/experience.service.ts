import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { ExperienceEntity } from "./entities/experience.entity";
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { CACHE_TTL, CACHE_KEYS } from '../common/cache.constants';

@Injectable()
export class ExperienceService {

    constructor(
        @InjectRepository(ExperienceEntity)
        private experienceRepository: Repository<ExperienceEntity>,
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
    ) {

    }

    async findAll() : Promise<any[]> {
        try {
            const cacheKey = CACHE_KEYS.EXPERIENCE + `:all`;
            const cached = await this.cacheManager.get<ExperienceEntity[]>(cacheKey);
            if (cached) {
                return cached;
            }

            const query = this.experienceRepository.createQueryBuilder('experience');
            const data = await query.getMany();

            if (data) await this.cacheManager.set(cacheKey, data, CACHE_TTL);
            return data;

        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }


}