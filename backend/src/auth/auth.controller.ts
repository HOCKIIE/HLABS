import { Controller, Post, Get, Req, Res, Body, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { RefreshJwtGuard } from './guards/refresh.jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }

    @Post('login')
    async login(
        @Res({ passthrough: true }) res: Response,
        @Body() body
    ) {
        const { accessToken, refreshToken } = await this.authService.login(body);

        res.cookie('access_token', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
        });

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/auth/refresh',
        });

        return { success: true };
    }

    @Post('refresh')
    @UseGuards(RefreshJwtGuard)
    refresh(@Req() req, @Res({ passthrough: true }) res: Response) 
    {
        const payload = req.user;
        const newAccessToken = this.authService.signAccessToken(
            {
                sub: payload.userId,
                email: payload.email,
                role: payload.role,
            }
        );

        res.cookie('access_token', newAccessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
        });

        return { refreshed: true };
    }

}
