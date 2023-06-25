import Clock from "./util/Clock.js";

export function printOwing(invoice) {
  let result = "";
  result += printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  result += printDetails(invoice, outstanding);
  return result;
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  let result = "";
  result += `고객명: ${invoice.customer}\n`;
  result += `채무액: ${outstanding}\n`;
  result += `마감일: ${invoice.dueDate.toLocaleDateString()}\n`;
  return result;
}

function printBanner() {
  let result = "";
  result += `***********************\n`;
  result += `****** 고객 채무 ******\n`;
  result += `***********************\n`;
  return result;
}
