export interface VinKeyValue {
  [key: string]: string | number | Array<string | number>;
}

export interface DecodedVin {
  wmi: VinKeyValue;
  model_line_body_style: VinKeyValue;
  gvwr_brake: VinKeyValue;
  motor_drivetrain: VinKeyValue;
  restraints: VinKeyValue;
  trim: VinKeyValue;
  check_digit: any;
  model_year: VinKeyValue;
  manufacturing_plant: VinKeyValue;
  serial_number: string | number;
}

export interface RawVin {
  wmi: string;
  model_line_body_style: string;
  gvwr_brake: string;
  motor_drivetrain: string;
  restraints: string;
  trim: string;
  check_digit: string;
  model_year: string;
  manufacturing_plant: string;
  serial_number: string;
}