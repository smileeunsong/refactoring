import { assert } from "chai";
import { statement } from "../01-6/statement.js";
import invoices from "../invoices.json" assert { type: "json" };
import plays from "../plays.json" assert { type: "json" };

describe("statement 함수 테스트", () => {
  it("청구내역을 정확히 출력하는지 확인", () => {
    let expected = `청구내역 (고객명: ${invoices[0].customer})\n`;
    expected += "Hamlet: $650.00 55석\n";
    expected += "As You Like It: $580.00 35석\n";
    expected += "Othello: $500.00 40석\n";
    expected += "총액: $1,730.00\n";
    expected += "적립 포인트: 47점\n";

    const result = statement(invoices[0], plays);

    assert.strictEqual(result, expected);
  });
});
