import InputView from "../src/InputView";
import { MissionUtils } from "@woowacourse/mission-utils";


jest.spyOn(MissionUtils.Console, 'readLineAsync');

describe("입력 테스트", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("음료만 입력 받았을 때 예외 발생", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("콜라-2,아메리카노-1");
    await expect(InputView.readMenu()).rejects.toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });

  test("중복된 메뉴를 입력할 때 예외 발생", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("해산물파스타-2,해산물파스타-1,레드와인-1");
    await expect(InputView.readMenu()).rejects.toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
});
