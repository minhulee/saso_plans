import { jest, describe, it, expect } from "@jest/globals";
import type { IModule } from "../types/module";

// TEST를 위한 임시 IModule 객체 생성
function createTestModule(name: string): IModule {
  return {
    name,
    activate: jest.fn(),
    deactivate: jest.fn(),
    onNotify: jest.fn(),
  };
}

describe("IModule 인터페이스", () => {
  it("name 속성을 가지고 있어야 한다", () => {
    const module = createTestModule("test-module");
    expect(module.name).toBe("test-module");
  });

  it("activate, deactivate 메서드를 호출할 수 있다", () => {
    const module = createTestModule("test-module");
    module.activate();
    module.deactivate();
    expect(module.activate).toHaveBeenCalled();
    expect(module.deactivate).toHaveBeenCalled();
  });

  it("onNotify 콜백을 호출할 수 있다", () => {
    const module = createTestModule("test-module");
    module.onNotify!("알림 테스트");
    expect(module.onNotify).toHaveBeenCalledWith("알림 테스트");
  });
});
