import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EducationEntity } from '../education/entities/education.entity';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { CACHE_TTL, CACHE_KEYS } from '../common/cache.constants';

@Injectable()
export class EducationService {

    constructor(
        @InjectRepository(EducationEntity)
        private educationRepository: Repository<EducationEntity>,
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
    ) {}

    async findAll() : Promise<EducationEntity[]> {
        try {
            const cacheKey = CACHE_KEYS.EDUCATION + `:all`;
            const cached = await this.cacheManager.get<EducationEntity[]>(cacheKey);
            if (cached) {
                return cached;
            }

            const query = this.educationRepository.createQueryBuilder('education');
            const data = await query.getMany();
            if (data) await this.cacheManager.set(cacheKey, data, CACHE_TTL);
            return data;

        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }

}
