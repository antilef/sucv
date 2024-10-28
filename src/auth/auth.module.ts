import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { HashService } from "./hash.service";
import { UserModule } from "src/user/user.module";
import { AuthGuard } from "./auth.guard";


@Module({
    imports: [
      UserModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '900s'}
      })
    ],
    controllers: [AuthController],
    providers: [AuthService,HashService],
    exports: []
  })
  export class AuthModule {}