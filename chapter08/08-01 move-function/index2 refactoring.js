// eslint-disable-next-line no-unused-vars
class Account {
  type = new AccountType();
  _daysOverdrawn = this.daysOverdrawn;

  get daysOverdrawn() {
    return 0;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0)
      result += this.type.overdraftCharge(this.daysOverdrawn);
    return result;
  }
}

// eslint-disable-next-line no-unused-vars
class AccountType {
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else return daysOverdrawn * 1.75;
  }
}
