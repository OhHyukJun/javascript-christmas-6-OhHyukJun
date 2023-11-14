export function WeekendDiscount(date,menus){
    let holiday = [1,2,8,9,15,16,22,23,29,30];
    let holidayMenu = ['티본스테이크', '바비큐립', '해산물파스타', '크리스마스파스타']
    let weekdayMenu = ['초코케이크', '아이스크림']
    let weekdayDiscount=0,holidayDiscount=0;
    if(!holiday.includes(date))
        menus.forEach(menu => {
            if(weekdayMenu.includes(menu[0])) weekdayDiscount += menu[1]*2023;
        });
    if(holiday.includes(date))
        menus.forEach(menu => {
            if(holidayMenu.includes(menu[0])) holidayDiscount += menu[1]*2023;
        });
    return {weekdayDiscount,holidayDiscount};
}

