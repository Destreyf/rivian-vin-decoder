import type { VinKeyValue } from "../types/vin";
import { ManufacturingPlants } from "./common/manufacturing-plants";
import { ModelYears } from "./common/model-years";
import { EngineMotorDrivetrains } from "./common/motors";
import { Trims } from "./common/trims";

export const WMI: VinKeyValue = { "7FC": "Rivian, Vehicle Type: Truck" };

export const ModelLineBodyStyle: VinKeyValue = {
  T: "R1T 4-door Pickup Truck",
};

export const GVWRBrakeSystem: VinKeyValue = {
  G: "8,001-9,000 lbs.; Hydraulic Brakes",
};

export const EngineMotorDrivetrain: VinKeyValue = {
  ...EngineMotorDrivetrains,
};

export const Restraints: VinKeyValue = {
  A: [
    "2x front airbags.",
    "2x knee airbags.",
    "2x front row side airbags.",
    "2x curtain airbags.",
    "2x front row 3-point seat belts.",
    "3x second row 3-point seat belts.",
  ],
};

export const Trim: VinKeyValue = {
  ...Trims,
};

export const ModelYear: VinKeyValue = {
  ...ModelYears,
};

export const ManufacturingPlant: VinKeyValue = {
  ...ManufacturingPlants,
};
