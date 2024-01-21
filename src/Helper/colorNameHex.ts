import chroma from "chroma-js";

export function getHexColor(color: string): string | false {
  if (color === "Scarlet") {
    return "#FF2400";
  }
  if (color === "bronze") {
    return "#CD7F32";
  }
  const hexCode = chroma(color).hex();
  return hexCode ? hexCode : false;
}
