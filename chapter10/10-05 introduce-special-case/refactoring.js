class Site {
  get customer() {
    return this._customer === "unknown"
      ? new UnknownCustomer()
      : this._customer;
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

  get name() {
    return "occupant";
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }

  set billingPlan(arg) {
    // ignore
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`investigate bad value: <${arg}>`);
  return arg === "unknown";
}

// client 1...
const aCustomer = site.customer;
// ... lots of intervening code ...
const customerName = aCustomer.name;

// client 2...
const plan = isUnknown(aCustomer)
  ? registry.billingPlans.basic
  : aCustomer.billingPlan;

// client 3...
if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

// client 4...
const weeksDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
