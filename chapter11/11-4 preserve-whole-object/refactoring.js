// 실내온도 모니터링 시스템
// 일일 최저 최고 기온이 난방 계획에서 정한 범위를 벗어나는지 확인

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high)) {
  alerts.push("방 온도가 지정 범위를 벗어났습니다.");
}

class HeatingPlan {
  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}
