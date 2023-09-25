export class CreateVesselDto {
  vessel_code: string;
  vessel_name?: string;
  carrier_code?: string;
  call_sign?: string;
  imo_num?: string;
  type?: string;
}
