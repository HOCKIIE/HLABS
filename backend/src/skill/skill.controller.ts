import { Controller, Get } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService) {}

    @Get('')
    findAll() {
        return this.skillService.findAll().toString();
    }

    @Get(':id')
    findOne(): string {
        return 'This action returns a skill';
    }

}
