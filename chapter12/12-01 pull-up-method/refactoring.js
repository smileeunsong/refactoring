class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }

  // 서브클래스 책임 오류
  get monthlyCost() {
    throw new Error("subclass responsibility");
  }
}

class Employee extends Party {}

class Department extends Party {}
