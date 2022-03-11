import { Injectable } from '@nestjs/common';
import { ForgetDto, ResetPasswordDto, SigninDto, SignupDto, UserProfile } from '@openid/api-interfaces';

@Injectable()
export class AuthService {

    constructor(){}

    async signin(signin: SigninDto): Promise<UserProfile> {
        return {
            id: '12',
            name: 'Some Name',
            role: 'public',
            verified: false
        }
    }

    async signup(signup: SignupDto): Promise<UserProfile> {
        return {
            id: '12',
            name: 'Some Name',
            role: 'public',
            verified: false
        }
    }

    async forget(forget: ForgetDto): Promise<void> {
        return;
    }

    async reset(reset: ResetPasswordDto): Promise<UserProfile> {
        return {
            id: '12',
            name: 'Some Name',
            role: 'public',
            verified: false
        }
    }


}
