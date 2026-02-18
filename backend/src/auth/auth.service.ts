import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async login(user: any) {
        const payload = {
            email: user.email,
            password: user.password,
        };

        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '15m',
        });

        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '7d',
        });

        return { accessToken, refreshToken };
    }

    signAccessToken(payload: any) {
        return this.jwtService.sign(payload, { expiresIn: '15m' });
    }
}
