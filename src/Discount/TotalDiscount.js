import { DailyDiscount } from "./DailyDiscount";
import { WeekendDiscount } from "./WeekendDiscount";
import { SpecialDiscount } from "./SpecialDiscount";
import { calculateTotalPrice } from "../CalculateTotal";
import { GiveProduct } from "./GiveProduct";

export function calculateTotalDiscount(date, menus) {
    const dailyDiscount = DailyDiscount(date);
    const weekendDiscounts = WeekendDiscount(date, menus);
    const specialDiscount = SpecialDiscount(date);
    const totalPrice = calculateTotalPrice(menus);
    const givePrice = GiveProduct(totalPrice);
    const totalDiscount = dailyDiscount + weekendDiscounts.weekdayDiscount + weekendDiscounts.holidayDiscount + specialDiscount;

    const totalBenifit = totalDiscount + givePrice.productPrice;
    const afterPrice = totalPrice - totalDiscount;

    return {afterPrice,totalBenifit};
}
