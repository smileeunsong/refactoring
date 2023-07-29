// 전체 급여와 가장 어린 나이를 계산하는 코드
function totalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge() {
  return Math.min(...people.map((p) => p.age));
}

return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`;
