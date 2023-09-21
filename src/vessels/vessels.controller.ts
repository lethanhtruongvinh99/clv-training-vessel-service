import { Controller } from '@nestjs/common';
import { VesselsService } from './vessels.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateVesselDto } from './dto/create-vessel.dto';

@Controller('vessels')
export class VesselsController {
  constructor(private readonly vesselsService: VesselsService) {}

  @MessagePattern({ role: 'vessel', cmd: 'get-all' })
  getAllVessels(@Payload() payload: { queries: any }) {
    return this.vesselsService.getAllVessels(payload.queries);
  }

  @MessagePattern({ role: 'vessel', cmd: 'get-one' })
  getOneVessel(@Payload() payload: { id: number }) {
    return this.vesselsService.getOneVessel(payload.id);
  }

  @MessagePattern({ role: 'vessel', cmd: 'create' })
  createVessel(@Payload() payload: { vessel: CreateVesselDto }) {
    return this.vesselsService.createVessel(payload.vessel);
  }

  @MessagePattern({ role: 'vessel', cmd: 'update' })
  updateVessel(@Payload() payload: { id: number; vessel: CreateVesselDto }) {
    return this.vesselsService.updateVessel(payload.id, payload.vessel);
  }
}
