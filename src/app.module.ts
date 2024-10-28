import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
@Module({
  imports: [AuthModule,HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
