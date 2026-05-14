import Redis from 'ioredis';
import { Logger } from '@nestjs/common';

export const redisProvider = {
    provide: 'REDIS_CLIENT',
    useFactory: () => {
        const redis = new Redis({
            host: process.env.REDIS_HOST || 'localhost',
            port: Number(process.env.REDIS_PORT || 6379),
            lazyConnect: true,
            maxRetriesPerRequest: null,
            retryStrategy(times) {
                Logger.log(`Redis retry attempt: ${times}`);
                return Math.min(times * 100, 3000);
            },
            reconnectOnError(err) {
                Logger.log('Redis reconnectOnError:', err.message);
                return true;
            },
        });
        redis.on('connect', () => {
            Logger.log('🚀 Redis connected');
        });
        redis.on('error', (err) => {
            Logger.error('❌ Redis error:', err.message);
        });
        redis.on('close', () => {
            Logger.warn('⚠️ Redis connection closed');
        });
        redis.on('reconnecting', () => {
            Logger.log('🔄 Redis reconnecting...');
        });
        return redis;
    },
};