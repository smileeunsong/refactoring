// 함수 이름 바꾸기
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 매개변수 추가하기
class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

// 매개변수를 속성으로 바꾸기
function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);
