import { DailyDiscount } from "../src/Discount/DailyDiscount";
import { SpecialDiscount } from "../src/Discount/SpecialDiscount";
import { GiveProduct } from "../src/Discount/GiveProduct";
import { GIFTS } from "../src/Constants/checkChampagne";
import { menuCategories } from "../src/Constants/menuBoard";
import { WeekendDiscount } from "../src/Discount/WeekendDiscount";
import { holidays } from "../src/Constants/calendar";

describe("할인 테스트", () => {
  test("데일리 할인 테스트", () => {
    expect(DailyDiscount(1)).toEqual(1000);
    expect(DailyDiscount(10)).toEqual(1900);
    expect(DailyDiscount(30)).toEqual(0);
  });

  test("주중 할인 테스트", () => {

    const menus = [[`${menuCategories.메인[0]}`, 2], [`${menuCategories.디저트[0]}`, 3], [`${menuCategories.애피타이저[0]}`, 4]];
    expect(WeekendDiscount(holidays[1], menus)).toEqual({weekdayDiscount: 0, holidayDiscount: 4046});
    expect(WeekendDiscount(holidays[1]+2, menus)).toEqual({weekdayDiscount: 6069, holidayDiscount: 0});
  });

  test("증정 항목 테스트", () => {
    expect(GiveProduct(120000)).toEqual({product: `${GIFTS.CHAMPAGNE}`, productPrice: 25000});
    expect(GiveProduct(100000)).toEqual({product: `${GIFTS.NONE}`, productPrice: 0});
  });
});
