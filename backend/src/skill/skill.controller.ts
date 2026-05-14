import { Controller, Get, Query, Res, Param, ParseIntPipe } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {

    constructor(private readonly skillService: SkillService) { }

    @Get('')
    async findAll(
        @Query('display') display: string
    ) {
        return await this.skillService.findAll(display)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.skillService.findOne(id);
    }

}