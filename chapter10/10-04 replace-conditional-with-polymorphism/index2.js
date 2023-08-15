function rating(vayage, history) {
  const vpf = voyageProfitFactor(vayage, history);
  const vr = voyageRisk(vayage);
  const chr = captainHistoryRisk(vayage, history);
  if (vpf * 3 > vr + chr * 2) return "A";
  else return "B";
}

function voyageRisk(vayage) {
  let result = 1;
  if (vayage.length > 4) result += 2;
  if (vayage.length > 8) result += vayage.length - 8;
  if (["china", "east-indies"].includes(vayage.zone)) result += 4;
  return Math.max(result, 0);
}

function captainHistoryRisk(vayage, history) {
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter((v) => v.profit < 0).length;
  if (vayage.zone === "china" && hasChina(history)) result -= 2;
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some((v) => "china" === v.zone);
}

function voyageProfitFactor(vayage, history) {
  let result = 2;
  if (vayage.zone === "china") result += 1;
  if (vayage.zone === "east-indies") result += 1;
  if (vayage.zone === "china" && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (vayage.length > 12) result += 1;
    if (vayage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (vayage.length > 14) result -= 1;
  }
  return result;
}

const voyage = { zone: "west-indies", length: 10 };
const history = [
  { zone: "east-indies", profit: 5 },
  { zone: "west-indies", profit: 15 },
  { zone: "china", profit: -2 },
  { zone: "west-africa", profit: 7 },
];

const myRating = rating(voyage, history);
