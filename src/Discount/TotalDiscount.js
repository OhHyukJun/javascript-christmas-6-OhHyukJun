import { DailyDiscount } from "./DailyDiscount";
import { WeekendDiscount } from "./WeekendDiscount";
import { SpecialDiscount } from "./SpecialDiscount";
import { CalculateTotalPrice } from "../CalculateTotal";
import { GiveProduct } from "./GiveProduct";

export function CalculateTotalDiscount(date, menus) {
    const dailyDiscount = DailyDiscount(date);
    const weekendDiscounts = WeekendDiscount(date, menus);
    const specialDiscount = SpecialDiscount(date);
    const totalPrice = CalculateTotalPrice(menus);
    const givePrice = GiveProduct(totalPrice);
    
    let totalBenifit=0;
    let afterPrice = totalPrice;
    if(totalPrice >= 10000){
        const totalDiscount = dailyDiscount + weekendDiscounts.weekdayDiscount + weekendDiscounts.holidayDiscount + specialDiscount;

        totalBenifit = totalDiscount + givePrice.productPrice;
        afterPrice = totalPrice - totalDiscount;
    }
    return {afterPrice,totalBenifit};
}
