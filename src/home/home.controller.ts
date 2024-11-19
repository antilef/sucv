import { BadRequestException, Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { HomeService } from "./home.service";
import { Public } from "src/auth/public.decorator";


@Controller('home')
export class HomeController{

    constructor(private homeService: HomeService){}

    @Get(":rut")
    @Public()
    async home(@Param('rut') rut: string){
        return this.homeService.productsHome(rut);
    }

    @Get(":planId")
    @Public()
    async planDetail(@Param('planId') planId: string){
        return this.homeService.planDetails(Number(planId));
    }
}