import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { RegisterUserDto } from "./dto/register.dto";
import { User } from "@prisma/client";
import { UserRepository } from "../user/user.repository";
import { HashService } from "./hash.service";


@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,private userRepository: UserRepository,private hashService: HashService){}

    async signIn(run: string, password: string) {
        const user: User = await this.userRepository.getUserBy(run)
        const hash = await this.hashService.hash(password)
        if(!this.hashService.compare(user.password,hash)){
            return 'not checked password'
        }
        
        const payload = { sub: user.id,name: user.name}
        const value = {
            access_token: await this.jwtService.signAsync(payload)
        }

        return value
    }

    async register(registerData: RegisterUserDto){
        const hashedPassword = await this.hashService.hash(registerData.password);
        const user = await this.userRepository.save(registerData,hashedPassword);
        const payload = { sub: user.id,name: user.name}
        const value = {
            access_token: await this.jwtService.signAsync(payload)
        }
        return value;
    }


    checkRun(run: string): boolean {
        const bodyRun = run.slice(0, -2);
        let dv = run.slice(-1).toUpperCase();
        const dvc = this.calculateDV(bodyRun)
        return dv === dvc
    }
    calculateDV( numero: any):string | number {
        let sum = 0;
        let mul = 2;

        let i = numero.length;
        while (i--) {
            sum = sum + parseInt(numero.charAt(i)) * mul;
            if (mul % 7 === 0) {
            mul = 2;
            } else {
            mul++;
            }
        }

        const res = sum % 11;

        if (res === 0) {
            return '0';
        } else if (res === 1) {
            return 'k';
        }

        return `${11 - res}`;
      }

}