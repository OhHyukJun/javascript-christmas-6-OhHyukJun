import { specialDays} from "../Constants/calendar";

export function SpecialDiscount(date){
    let specialDiscount = 0;
    if(specialDays.includes(date))
        specialDiscount = 1000;
    return specialDiscount;
}

