export interface VinKeyValue {
  [key: string]: string | number | Array<string | number>;
}

export interface DecodedVin {
  wmi: string;
  model_line_body_style: string;
  gvwr_brake: string;
  motor_drivetrain: string;
  restraints: string;
  trim: string;
  check_digit: string | number;
  model_year: string;
  manufacturing_plant: string;
  serial_number: string | number;
}

export interface RawVin {
  wmi: string;
  model_line_body_style: string;
  gvwr_brake: string;
  motor_drivetrain: string;
  restraints: string;
  trim: string;
  check_digit: string | number;
  model_year: string;
  manufacturing_plant: string;
  serial_number: string;
}

export interface VehicleVinDefinition {
  WMI: VinKeyValue;
  ModelLineBodyStyle: VinKeyValue;
  GVWRBrakeSystem: VinKeyValue;
  EngineMotorDrivetrain: VinKeyValue;
  Restraints: VinKeyValue;
  Trim: VinKeyValue;
  ModelYear: VinKeyValue;
  ManufacturingPlant: VinKeyValue;
}
