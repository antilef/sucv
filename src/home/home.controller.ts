import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { HomeService } from "./home.service";

@Controller('home')
export class HomeController{

    constructor(private homeService: HomeService){}

    @Get()
    async home(@Param()rut: string){
        return this.homeService.getProductsHome(rut);
    }
}