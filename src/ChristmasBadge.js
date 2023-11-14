export function ChristmasBadge(afterPrice) {
    let badge = '';
    if(afterPrice.totalBenifit >= 5000 && afterPrice.totalBenifit < 10000) badge ='별';
    if(afterPrice.totalBenifit >= 10000 && afterPrice.totalBenifit < 20000) badge='트리';
    if(afterPrice.totalBenifit >= 20000) badge='산타';
    if(badge === '') badge = '없음';
    return badge;
}