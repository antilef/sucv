import { Module } from "@nestjs/common";
import { HomeController } from "./home.controller";
import { HomeService } from "./home.service";
import { AuthModule } from "src/auth/auth.module";
import { PrismaModule } from "src/ prisma/prisma.module";
import { UserModule } from "src/user/user.module";
import { ProductRepository } from "./product.repository";
import { PlanModule } from "src/plan/plan.module";

@Module({
    imports: [AuthModule,PrismaModule,UserModule,PlanModule],
    controllers: [HomeController],
    providers: [HomeService,ProductRepository],
    exports:[HomeService]
  })
  export class HomeModule {}