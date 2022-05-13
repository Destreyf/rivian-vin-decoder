import * as S from "./R1S";
import * as T from "./R1T";

const type_map = new Map();

Object.keys(S.WMI).forEach((key) => type_map.set(key, S));
Object.keys(T.WMI).forEach((key) => type_map.set(key, T));

export const VinTypes: Map<string, any> = type_map;
