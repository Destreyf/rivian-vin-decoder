import type { DecodedVin, RawVin } from "@/types/vin";
import { VinTypes } from "@/vins";
import { validateVin } from "./validate-vin";

export function parseRawVin(vin?: string): RawVin {
  if (!vin) throw new Error("You must pass in a VIN number.");
  if (!validateVin(vin)) throw new Error("Unable to validate VIN.");

  const vinSplit = vin.split("");
  const wmi = _select(vinSplit, 3);
  const model_line_body_style = _select(vinSplit, 1);
  const gvwr_brake = _select(vinSplit, 1);
  const motor_drivetrain = _select(vinSplit, 1);
  const restraints = _select(vinSplit, 1);
  const trim = _select(vinSplit, 1);
  const check_digit = _select(vinSplit, 1);
  const model_year = _select(vinSplit, 1);
  const manufacturing_plant = _select(vinSplit, 1);
  const serial_number = vinSplit.join("");

  return {
    wmi,
    model_line_body_style,
    gvwr_brake,
    motor_drivetrain,
    restraints,
    trim,
    check_digit,
    model_year,
    manufacturing_plant,
    serial_number,
  };
}

export function parseVin(vin?: string): DecodedVin {
  const raw = parseRawVin(vin);

  if (!VinTypes.has(raw.wmi))
    throw new Error("Unknown World Manufacturer Identifier.");

  const details = VinTypes.get(raw.wmi);

  return {
    wmi: details.WMI[raw.wmi],
    model_line_body_style: details.ModelLineBodyStyle[raw.model_line_body_style],
    gvwr_brake: details.GVWRBrakeSystem[raw.gvwr_brake],
    motor_drivetrain: details.EngineMotorDrivetrain[raw.motor_drivetrain],
    restraints: details.Restraints[raw.restraints],
    trim: details.Trim[raw.trim],
    check_digit: raw.check_digit,
    model_year: details.ModelYear[raw.model_year],
    manufacturing_plant: details.ManufacturingPlant[raw.manufacturing_plant],
    serial_number: raw.serial_number,
  };
}

function _select(source: Array<string | number>, length = 1) {
  return source.splice(0, length).join("");
}
