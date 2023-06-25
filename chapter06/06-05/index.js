// 함수 이름 바꾸기
function circum(radius) {
  return 2 * Math.PI * radius;
}

// 매개변수 추가하기
class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

// 매개변수를 속성으로 바꾸기
function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
