import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { UserRepository } from "src/user/user.repository";

@Injectable()
export class HomeService {

    constructor(private productRepository: ProductRepository,private userRepository:UserRepository){} 

    async getProductsHome(rut: string) {
        const user = await this.userRepository.getUserBy(rut)
        const userId = user.id

        const productsWithDetails =  await this.productRepository.getProductsByUser(userId);
        return productsWithDetails
    }
    
}