import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { EducationEntity } from './entities/education.entity';

@Module({
    providers: [EducationService],
    controllers: [EducationController],
    imports: [TypeOrmModule.forFeature([EducationEntity])],
    exports: [EducationService],
})
export class EducationModule {}
