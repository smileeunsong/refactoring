import Clock from "./util/Clock.js";

export function printOwing(invoice) {
  let outstanding = 0;
  let result = "";

  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)을 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetails();

  function printDetails() {
    result += `고객명: ${invoice.customer}\n`;
    result += `채무액: ${outstanding}\n`;
    result += `마감일: ${invoice.dueDate.toLocaleDateString()}\n`;
  }

  function printBanner() {
    result += `***********************\n`;
    result += `****** 고객 채무 ******\n`;
    result += `***********************\n`;
  }

  return result;
}
