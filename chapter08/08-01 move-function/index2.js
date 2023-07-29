// eslint-disable-next-line no-unused-vars
class Account {
  type = new AccountType();
  _daysOverdrawn = this.daysOverdrawn;

  get daysOverdrawn() {
    return 0;
  }

  get bankCharge() {
    // 은행 이자 계산
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    // 초과 인출 이자 계산
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this._daysOverdrawn - 7) * 0.85;
    } else return this._daysOverdrawn * 1.75;
  }
}

class AccountType {}
