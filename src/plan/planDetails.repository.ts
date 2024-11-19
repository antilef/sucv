import { PrismaService } from "src/ prisma/prisma.service";

export class PlanDetailsRepository {
    
    constructor(private prisma: PrismaService){}

    getDetails(planId: number) {
        this.prisma.planDetail.findMany({
            where:{
                planId: planId  
            }
        })
    }
}