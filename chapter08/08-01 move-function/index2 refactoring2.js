// eslint-disable-next-line no-unused-vars
class Account {
  type = new AccountType();
  _daysOverdrawn = this.daysOverdrawn;

  get daysOverdrawn() {
    return 0;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.type.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this);
  }
}

// eslint-disable-next-line no-unused-vars
class AccountType {
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (account.daysOverdrawn - 7) * 0.85;
    } else return account.daysOverdrawn * 1.75;
  }
}
