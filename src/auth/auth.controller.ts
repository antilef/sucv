import { Body, Controller, Get, Post, UseGuards,Request} from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register.dto";
import { AuthGuard } from "./auth.guard";
import { Public } from "./public.decorator";

@Controller('auth')
export class AuthController{

    public constructor(private authService:AuthService){
    }

    @Post()
    @Public()
    async login(@Body() loginDto: LoginDto){
        const {run,password} = loginDto;
        const valid = this.authService.checkRun(run);
        if(!valid){
            return 'Not valid run'
        }

        const token = this.authService.signIn(run,password);

        return token
    }
    @Post('register')
    @Public()
    async register(@Body() registerDto: RegisterUserDto){
        const { run } = registerDto;
        const valid = this.authService.checkRun(run);
        if(!valid){
            return 'Not valid run'
        }
        return this.authService.register(registerDto)        
    }

    // @UseGuards(AuthGuard)
    // @Get('Home')
    // getHome(@Request() req){
    //     return req.user
    // }
}