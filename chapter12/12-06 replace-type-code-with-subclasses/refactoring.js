class Employee {
  constructor(name) {
    this._name = name;
  }

  toString() {
    return `${this._name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

function createEmployee(name, type) {
  switch (type) {
    case "engineer":
      return new Engineer(name);

    case "salesperson":
      return new Salesperson(name);

    case "manager":
      return new Manager(name);

    default:
      throw new Error(`Employee cannot be of type ${type}`);
  }
}
