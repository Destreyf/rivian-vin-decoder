import type { VehicleVinDefinition } from "@/types/vin";
import * as S from "./R1S";
import * as T from "./R1T";

const type_map = new Map<string, VehicleVinDefinition>();

Object.keys(S.WMI).forEach((key) => type_map.set(key, S));
Object.keys(T.WMI).forEach((key) => type_map.set(key, T));

export const VinTypes: Map<string, VehicleVinDefinition> = type_map;
