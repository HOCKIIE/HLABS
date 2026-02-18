import { Controller, Get, Query } from '@nestjs/common';
import { SkillService } from './skill.service';
@Controller('skill')
export class SkillController {

    constructor(private readonly skillService: SkillService) {}

    @Get('')
    findAll(
        @Query('display') display: string
    ){
        return this.skillService.findAll()
        .then(skills => display ? skills.filter(skill => skill.display === display) : skills)
        .catch(err => {
            console.error('Error fetching skills:', err);
            throw err;
        });
    }

    @Get(':id')
    findOne(id: number){
        return this.skillService.findOne(id);
    }

}

