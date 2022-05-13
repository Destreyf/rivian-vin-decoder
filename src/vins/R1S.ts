import type { VinKeyValue } from "../types/vin";
import { ManufacturingPlants } from "./common/manufacturing-plants";
import { ModelYears } from "./common/model-years";
import { EngineMotorDrivetrains } from "./common/motors";
import { Trims } from "./common/trims";

export const WMI: VinKeyValue = {
  "7PD": "Rivian, Vehicle Type: Multi-Purpose Passenger Vehicle (MPV)",
};

export const ModelLineBodyStyle: VinKeyValue = {
  S: "R1S 4-door MPV",
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
  B: [
    "2x front airbags",
    "2x knee airbags",
    "2x front row side airbags",
    "2x curtain airbags",
    "2x front row 3-point seat belts",
    "3x second row 3-point seat belts.",
    "2x third row 3-point seat belts.",
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
