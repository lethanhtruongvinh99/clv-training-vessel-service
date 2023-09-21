import { Module } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { VesselsController } from './vessels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vessel } from './entities/vessel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vessel])],
  controllers: [VesselsController],
  providers: [VesselsService],
})
export class VesselsModule {}
