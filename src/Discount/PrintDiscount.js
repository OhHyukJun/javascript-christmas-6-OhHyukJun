import { DailyDiscount } from "./DailyDiscount";
import { WeekendDiscount } from "./WeekendDiscount";
import { SpecialDiscount } from "./SpecialDiscount";
import { GiveProduct } from "./GiveProduct";

export function PrintDiscounts(date, menus, totalPrice) {
    const dailyDiscount = DailyDiscount(date);
    const weekendDiscounts = WeekendDiscount(date, menus);
    const specialDiscount = SpecialDiscount(date);
    const givePrice = GiveProduct(totalPrice);

    let discountDetails = '';
    if(dailyDiscount > 0) discountDetails = `크리스마스 디데이 할인: -${dailyDiscount}원\n`;   
    if(weekendDiscounts.weekdayDiscount > 0) discountDetails = `평일 할인: -${weekendDiscounts.weekdayDiscount}원\n`;
    if(specialDiscount > 0) discountDetails = `특별 할인: -${specialDiscount}원\n`;
    if(givePrice.productPrice > 0) discountDetails = `증정 이벤트: -${givePrice.productPrice}원\n`;
    if(discountDetails === '') discountDetails = '없음';
    return discountDetails;
}
