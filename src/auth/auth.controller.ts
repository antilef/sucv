import { Body, Controller, Get, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController{

    public constructor(private authService:AuthService){
    }

    @Post()
    async login(@Body() loginDto: LoginDto): Promise<string> {
        const {run,password} = loginDto;
        const valid = this.authService.checkRun(run);
        if(!valid){
            return 'Not valid run'
        }

        const token = this.authService.signIn(run,password);

        return 'works'
    }
    @Post('register')
    async register(@Body() registerDto: RegisterUserDto){
        return this.authService.register(registerDto)
    }
}