export function GiveProduct(totalPrice){
    let product = '없음';
    if(totalPrice >= 120000){
        product = '샴페인 1개';
    }
    return product;
}
