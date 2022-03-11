import { Body, Controller, Post } from '@nestjs/common';
import { ForgetDto, ResetPasswordDto, SigninDto, SignupDto, UserProfile } from '@openid/api-interfaces';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('signin')
    async signin(@Body() signin: SigninDto): Promise<UserProfile> {

        return this.authService.signin(signin);
    }

    @Post('signup')
    async signup(@Body() signup: SignupDto): Promise<UserProfile> {
        return this.authService.signup(signup);
    }

    @Post('forget')
    async forget(@Body() forget: ForgetDto): Promise<void> {
        return this.authService.forget(forget);
    }

    @Post('reset')
    async reset(@Body() reset: ResetPasswordDto): Promise<UserProfile> {
        return this.authService.reset(reset);
    }

}
