import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vessel } from './entities/vessel.entity';
import { Repository } from 'typeorm';
import { CreateVesselDto } from './dto/create-vessel.dto';

@Injectable()
export class VesselsService {
  constructor(
    @InjectRepository(Vessel)
    private readonly vesselsRepository: Repository<Vessel>,
  ) {}

  getAllVessels(queries: any) {
    return this.vesselsRepository.find({ where: queries });
  }

  getOneVessel(id: number) {
    return this.vesselsRepository.findOne({ where: { id } });
  }

  createVessel(vessel: CreateVesselDto) {
    const newVessel = this.vesselsRepository.create(vessel);
    return this.vesselsRepository.save(newVessel);
  }

  async updateVessel(id: number, vessel: CreateVesselDto) {
    const targetVessel = await this.vesselsRepository.findOne({
      where: { id },
    });
    if (targetVessel) {
      Object.assign(targetVessel, vessel);
      return this.vesselsRepository.save(targetVessel);
    } else {
      throw new NotFoundException();
    }
  }
}
