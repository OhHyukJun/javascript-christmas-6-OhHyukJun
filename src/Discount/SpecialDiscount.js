export function SpecialDiscount(date){
    let specialday = [3,10,17,24,25,31];
    let specialDiscount = 0;
    if(specialday.includes(date))
        specialDiscount = 1000;
    return specialDiscount;
}

