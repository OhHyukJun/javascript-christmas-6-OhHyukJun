export function DailyDiscount(date){
    let dailydiscount=0;
    if(date < 26)
        dailydiscount = 1000 + (date - 1) * 100;

    return dailydiscount;
}

