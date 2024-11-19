import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/ prisma/prisma.module';
import { PlanDetailsRepository } from './planDetails.repository';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [PlanDetailsRepository],
  exports:[
    PlanDetailsRepository
  ]
})
export class PlanModule {}