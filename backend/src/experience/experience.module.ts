import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceEntity } from "./entities/experience.entity";
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';

@Module({
    controllers: [ExperienceController],
    providers: [ExperienceService],
    imports: [TypeOrmModule.forFeature([ExperienceEntity])],
    exports: [TypeOrmModule, ExperienceService],
})
export class ExperienceModule {}