import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy,'jwt-refresh')
{
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => req?.cookies?.refresh_token,
            ]),
            secretOrKey: process.env.JWT_REFRESH_SECRET,
        });
    }

    validate(payload: any) {
        return payload;
    }
}