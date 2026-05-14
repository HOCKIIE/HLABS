import { IsOptional, IsString } from 'class-validator';

export class CreateToolDto {
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;
}
