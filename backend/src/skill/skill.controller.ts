import { Controller, Get, Query, Res } from '@nestjs/common';
import { SkillService } from './skill.service';
import type { Response } from 'express';

@Controller('skill')
export class SkillController {

    constructor(private readonly skillService: SkillService) {}

    @Get('')
    async findAll(
        @Query('display') display: string,
        @Res() res?: Response
    ){
        if (res) {
            console.log('Setting Cache-Control header for /skill endpoint');
        }
        res?.setHeader(
            'Cache-Control',
            'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
        );
        const data = await this.skillService.findAll(display)
        .catch(err => {
            console.error('Error fetching skills:', err);
            throw err;
        });
        return res ? res.json(data) : data;
    }

    @Get(':id')
    findOne(id: number){
        return this.skillService.findOne(id);
    }

}

