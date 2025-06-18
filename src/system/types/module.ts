// 모든 하위 모듈이 포함해야 할 공통 인터페이스입니다.
export interface IModule {
  // 각 모듈이 포함해야 할 고유 정보입니다.
  readonly name: string;

  activate(): void;
  deactivate(): void;

  // 알림 이벤트 트리거 (선택적)
  // 해당 이벤트가 모든 모듈에서 존재해야 한다고 판단하나, 수정 가능
  onNotify?: (message: string) => void;
}
