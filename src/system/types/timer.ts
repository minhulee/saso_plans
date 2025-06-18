import { IModule } from "./module";

// 타이머의 기본 동작을 정의하는 인터페이스
export interface ITimer {
  start(duration: number): void;
  stop(): void;
  reset(): void;
  getTimeLeft(): number;
}

// IModule과 ITimer를 상속한 타이머 모듈 인터페이스
interface ITimerModule extends IModule, ITimer {}

// 1. 공통 인터페이스를 충족하는 일반 타이머
export interface NormalTimer extends ITimerModule {}

// 2. 공통 인터페이스를 충족하고 포모도로 관련 기능을 추가로 가지는 포모도로 타이머
export interface PomodoroTimer extends ITimerModule {
  startPomodoroSession(workDuration: number, breakDuration: number): void;
  skipBreak(): void;
  getSessionCount(): number;
}
