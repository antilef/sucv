import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { HomeService } from "./home.service";
import { Public } from "src/auth/public.decorator";

@Controller('home')
export class HomeController{

    constructor(private homeService: HomeService){}

    @Get()
    async home(@Param()rut: string){
        return this.homeService.getProductsHome(rut);
    }
}