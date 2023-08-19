// 실내 온도 제어 시스템
// 사용자는 온도조절기로 온도를 설정할 수 있지만 목표 온도는 난방 계획에서 정한 범위에서만 선택할 수 있다.

class HeatingPlan {
  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}

// 호출자
if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();
