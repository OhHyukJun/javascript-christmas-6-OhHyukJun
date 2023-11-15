import { ChristmasBadge } from "../src/ChristmasBadge";

describe("크리스마스 배지 테스트", () => {
  test("배지 테스트", () => {
    expect(ChristmasBadge({totalBenifit: 4500})).toEqual('없음');
    expect(ChristmasBadge({totalBenifit: 7500})).toEqual('별');
    expect(ChristmasBadge({totalBenifit: 17500})).toEqual('트리');
    expect(ChristmasBadge({totalBenifit: 27500})).toEqual('산타');
  });
});
