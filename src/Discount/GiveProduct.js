import { GIFTS } from "../Constants/checkChampagne";

export function GiveProduct(totalPrice){
    let product = GIFTS.NONE;
    let productPrice = 0;
    if(totalPrice >= 120000){
        product = GIFTS.CHAMPAGNE;
        productPrice = 25000;
    }
    return {product ,productPrice};
}
