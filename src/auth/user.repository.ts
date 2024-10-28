import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

export class UserRepository {

    constructor(private prisma: PrismaService){}

    async getUserBy(run: string):Promise<User>{
        return this.prisma.user.findUnique({
            where: {
                run: run
            }
        })
    }
}