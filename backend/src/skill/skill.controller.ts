import { Controller, Get } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {

    constructor(private readonly skillService: SkillService) {}

    @Get('')
    findAll() {
        return this.skillService.findAll();
    }

    @Get(':id')
    findOne(id: number){
        return this.skillService.findOne(id);
    }

}
