function rating(vayage, history) {
  return createRating(vayage, history).value;
}

class Rating {
  constructor(vayage, history) {
    this._vayage = vayage;
    this._history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > vr + chr * 2) return "A";
    else return "B";
  }

  get voyageRisk() {
    let result = 1;
    if (this._vayage.length > 4) result += 2;
    if (this._vayage.length > 8) result += this._vayage.length - 8;
    if (["china", "east-indies"].includes(this._vayage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this._history.length < 5) result += 4;
    result += this._history.filter((v) => v.profit < 0).length;
    if (this._vayage.zone === "china" && this.hasChina) result -= 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this._vayage.zone === "china") result += 1;
    if (this._vayage.zone === "east-indies") result += 1;
    if (this._vayage.zone === "china" && this.hasChina) {
      result += 3;
      if (this._history.length > 10) result += 1;
      if (this._vayage.length > 12) result += 1;
      if (this._vayage.length > 18) result -= 1;
    } else {
      if (this._history.length > 8) result += 1;
      if (this._vayage.length > 14) result -= 1;
    }
    return result;
  }

  get hasChinaHistory() {
    return this._history.some((v) => "china" === v.zone);
  }
}

class ExperiencedChinaRating extends Rating {}

function createRating(vayage, history) {
  if (vayage.zone === "china" && history.some((v) => "china" === v.zone))
    return new ExperiencedChinaRating(vayage, history);
  else return new Rating(vayage, history);
}

const voyage = { zone: "west-indies", length: 10 };
const history = [
  { zone: "east-indies", profit: 5 },
  { zone: "west-indies", profit: 15 },
  { zone: "china", profit: -2 },
  { zone: "west-africa", profit: 7 },
];

const myRating = rating(voyage, history);
