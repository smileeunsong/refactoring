import invoice from "../data/invoice.json" assert { type: "json" };
import { printOwing } from "../refactoring.js";
import assert from "assert";
import Clock from "../util/Clock.js";

describe("printOwing 함수 테스트", () => {
  let today = Clock.today;
  let dueDate;
  beforeEach(() => {
    dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  });

  it("채무내역을 정확히 출력하는지 확인", () => {
    let expected = `***********************\n`;
    expected += `****** 고객 채무 ******\n`;
    expected += `***********************\n`;
    expected += `고객명: ${invoice.customer}\n`;
    expected += `채무액: 6000\n`;
    expected += `마감일: ${dueDate.toLocaleDateString()}\n`;

    const result = printOwing(invoice);

    assert.strictEqual(result, expected);
  });
});
