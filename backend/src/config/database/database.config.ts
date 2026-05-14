import { registerAs } from '@nestjs/config';

const port = parseInt(process.env.DB_PORT || '5432', 10);

if (Number.isNaN(port)) {
    throw new Error('DB_PORT must be a number');
}

export default registerAs('database', () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV !== 'production',
}));
