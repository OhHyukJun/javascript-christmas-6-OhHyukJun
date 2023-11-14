import { menuCategories } from "../Constants/menuBoard";
import { holidays } from "../Constants/calendar";

export function WeekendDiscount(date,menus){
    let holidayMenu = menuCategories['메인'];
    let weekdayMenu = menuCategories['디저트'];
    let weekdayDiscount=0,holidayDiscount=0;
    if(!holidays.includes(date))
        menus.forEach(menu => {
            if(weekdayMenu.includes(menu[0])) weekdayDiscount += menu[1]*2023;
        });
    if(holidays.includes(date))
        menus.forEach(menu => {
            if(holidayMenu.includes(menu[0])) holidayDiscount += menu[1]*2023;
        });
    return {weekdayDiscount,holidayDiscount};
}

