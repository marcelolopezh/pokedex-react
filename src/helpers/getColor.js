export const getColor = (item) => {
  let bgC = null;
  let bC = null;
  if (item === "fire") {
    bgC = "rgba(255,0,0,0.5)";
    bC = "rgba(255,0,0,1)";
  }
  if (item === "flying") {
    bgC = "rgba(61, 89, 188,0.5)";
    bC = "rgba(61, 89, 188,1)";
  }
  if (item === "ice") {
    bgC = "rgba(30, 152, 204,0.5)";
    bC = "rgba(30, 152, 204,1)";
  }
  if (item === "ghost") {
    bgC = "rgba(114, 30, 204,0.5)";
    bC = "rgba(114, 30, 204,1)";
  }
  if (item === "poison") {
    bgC = "rgba(56, 233, 139,0.5)";
    bC = "rgba(56, 233, 139,1)";
  }
  if (item === "psychic") {
    bgC = "rgba(203, 10, 246,0.5)";
    bC = "rgba(203, 10, 246,1)";
  }
  if (item === "electric") {
    bgC = "rgba(248, 238, 46,0.5)";
    bC = "rgba(248, 238, 46,1)";
  }
  if (item === "bug") {
    bgC = "rgba(141, 137, 53,0.5)";
    bC = "rgba(141, 137, 53,1)";
  }
  if (item === "water") {
    bgC = "rgba(12, 52, 254,0.5)";
    bC = "rgba(12, 52, 254,1)";
  }
  if (item === "grass") {
    bgC = "rgba(12, 254, 48,0.5)";
    bC = "rgba(12, 254, 48,1)";
  }
  if (item === "normal") {
    bgC = "rgba(225, 152, 237,0.5)";
    bC = "rgba(225, 152, 237,1)";
  }
  if (item === "ground") {
    bgC = "rgba(225, 171, 34,0.5)";
    bC = "rgba(225, 171, 34,1)";
  }
  if (item === "fairy") {
    bgC = "rgba(245, 69, 236,0.5)";
    bC = "rgba(245, 69, 236,1)";
  }
  if (item === "rock") {
    bgC = "rgba(158, 157, 152,0.5)";
    bC = "rgba(158, 157, 152,1)";
  }
  return [bgC, bC];
};
