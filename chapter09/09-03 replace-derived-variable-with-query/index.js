class ProductionPlan {
  _production = 0;
  _adjustments = [];

  constructor(production) {
    this._production = production;
  }

  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
