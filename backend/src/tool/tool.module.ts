import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolService } from './tool.service';
import { ToolController } from './tool.controller';
import { ToolEntity } from './entities/tool.entity';

@Module({ 
    controllers: [ToolController], 
    providers: [ToolService],
    imports: [TypeOrmModule.forFeature([ToolEntity])],
    exports: [TypeOrmModule, ToolService],
})
export class ToolModule {}
