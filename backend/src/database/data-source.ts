// src/database/data-source.ts
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { SkillEntity } from '../skill/skill.entity';

export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [SkillEntity],
    migrations: ['src/database/migrations/*.ts'],
    synchronize: false,
});