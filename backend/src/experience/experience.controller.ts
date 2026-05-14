import { Controller, Get, } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('experiences')
export class ExperienceController { 

    constructor(private readonly experienceService: ExperienceService) {}

    @Get('')
    async findAll() {
        return await this.experienceService.findAll()
    }
}
