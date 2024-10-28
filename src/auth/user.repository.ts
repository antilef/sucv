import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/ prisma/prisma.service";
import { RegisterUserDto } from "./dto/register.dto";

@Injectable()
export class UserRepository {

    constructor(private prisma: PrismaService){}

    async getUserBy(run: string):Promise<User>{
        return this.prisma.user.findUnique({
            where: {
                run: run
            }
        })
    }

    async save(userData: RegisterUserDto,hashPassword: string): Promise<User>{
        return await this.prisma.user.create({
            data:{
                email: userData.email,
                password: hashPassword,
                name: userData.name,
                run: userData.run,
                lastname: userData.lastname,
                address: userData.address,
                city: userData.city,
            }
        })
    }
}