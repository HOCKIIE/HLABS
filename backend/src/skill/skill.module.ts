import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillEntity } from './skill.entity';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';

@Module({
    controllers:[ SkillController ],
    providers: [ SkillService ],
    imports: [ TypeOrmModule.forFeature([SkillEntity]) ],
    exports: [TypeOrmModule, SkillService]
})
export class SkillModule {}