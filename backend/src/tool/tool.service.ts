import { Injectable, Query, Inject, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ToolEntity } from './entities/tool.entity';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { CACHE_TTL, CACHE_KEYS } from '../common/cache.constants';

@Injectable()
export class ToolService {

    constructor(
        @InjectRepository(ToolEntity)
        private toolRepository: Repository<ToolEntity>,
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
    ) {

    }

    async create(createToolDto: CreateToolDto) {
        return 'This action adds a new tool';
    }

    async findAll() : Promise<ToolEntity[]> {
        try {
            const cacheKey = CACHE_KEYS.TOOLS + `:all`;
            const cached = await this.cacheManager.get<ToolEntity[]>(cacheKey);
            if (cached) {
                return cached;
            }

            const query = this.toolRepository.createQueryBuilder('tools');
            const data = await query.getMany();

            if (data) await this.cacheManager.set(cacheKey, data, CACHE_TTL);
            return data;

        } catch (err) {
            console.error('ERROR 👉', err);
            throw err;
        }
    }

    async findOne(id: number) {
        return `This action returns a #${id} tool`;
    }

    async update(id: number, updateToolDto: UpdateToolDto) {
        return `This action updates a #${id} tool`;
    }

    async remove(id: number) {
        return `This action removes a #${id} tool`;
    }
}
