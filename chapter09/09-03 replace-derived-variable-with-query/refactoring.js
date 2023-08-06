class ProductionPlan {
  _production = 0;
  _adjustments = [];

  constructor(production) {
    this._production = production;
  }

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}
