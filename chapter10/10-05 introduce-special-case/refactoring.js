class Site {
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}

  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }
}

// client 1...
const aCustomer = site.customer;
// ... lots of intervening code ...
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;

// client 2...
const plan =
  aCustomer === "unknown" ? registry.billingPlans.basic : aCustomer.billingPlan;

// client 3...
if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

// client 4...
const weeksDelinquent =
  aCustomer === "unknown"
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;
