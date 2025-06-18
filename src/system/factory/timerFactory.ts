import type { NormalTimer, PomodoroTimer } from "../types";

// 공통 타이머 생성 함수
function createNormalTimer(name: string): NormalTimer {
  let timeLeft = 0;
  let timerId: number | null = null;

  return {
    name,
    activate() {},
    deactivate() {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
    },
    start(duration: number) {
      timeLeft = duration;
    },
    stop() {
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
    },
    reset() {
      timeLeft = 0;
    },
    getTimeLeft() {
      return timeLeft;
    },
    onNotify: undefined,
  };
}

// 포모도로 타이머 생성 함수
export function createPomodoroTimer(name: string): PomodoroTimer {
  const base = createNormalTimer(name);
  let sessionCount = 0;

  return {
    ...base,
    startPomodoroSession(workDuration: number, breakDuration: number) {
      sessionCount++;
      // 포모도로 세션 시작 로직
      // 필요시 base.start(workDuration) 등 활용 가능
    },
    skipBreak() {
      // 휴식 스킵 로직
    },
    getSessionCount() {
      return sessionCount;
    },
  };
}
