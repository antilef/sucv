import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { UserRepository } from "src/user/user.repository";
import { PlanDetailsRepository } from "src/plan/planDetails.repository";

@Injectable()
export class HomeService {

    constructor(private productRepository: ProductRepository,private userRepository:UserRepository,private planDetailsRepository: PlanDetailsRepository){} 

    async productsHome(rut: string) {
        const user = await this.userRepository.getUserBy(rut)
        const userId = user.id

        const productsWithDetails =  await this.productRepository.getProductsByUser(userId);
        return productsWithDetails
    }

    async planDetails(planId: number) {

        return await this.planDetailsRepository.getDetails(planId)

    }
    
}