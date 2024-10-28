import { Injectable } from "@nestjs/common";
import { Product } from "@prisma/client";
import { PrismaModule } from "src/ prisma/prisma.module";
import { PrismaService } from "src/ prisma/prisma.service";

@Injectable()
export class ProductRepository {
    constructor(private prisma: PrismaService){}

    getProductsByUser(userId: number){
        return this.prisma.product.findMany({
            where: {
                userId: {
                    equals: userId
                }
            },
            include: {
                plan: true
            }
        })
    }


}