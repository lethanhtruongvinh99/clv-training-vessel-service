import { Controller } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateVesselDto } from './dto/create-vessel.dto';

@Controller('vessels')
export class VesselsController {
  constructor(private readonly vesselsService: VesselsService) {}

  @MessagePattern({ role: 'vessel', cmd: 'get-all' })
  getAllVessels(@Payload() payload: { queries: any }) {
    console.log('!@#');
    const { queries } = payload;
    const conditions = {};
    Object.keys(queries).forEach((key) => {
      if (queries[key]) {
        conditions[key] = queries[key];
      }
    });
    return this.vesselsService.getAllVessels(conditions);
  }

  @MessagePattern({ role: 'vessel', cmd: 'get-one' })
  getOneVessel(@Payload() payload: { vessel_code: string }) {
    return this.vesselsService.getOneVessel(payload.vessel_code);
  }

  @MessagePattern({ role: 'vessel', cmd: 'create' })
  createVessel(@Payload() payload: { vessel: CreateVesselDto }) {
    return this.vesselsService.createVessel(payload.vessel);
  }

  @MessagePattern({ role: 'vessel', cmd: 'update' })
  updateVessel(
    @Payload() payload: { vessel_code: string; vessel: CreateVesselDto },
  ) {
    return this.vesselsService.updateVessel(
      payload.vessel_code,
      payload.vessel,
    );
  }
}
