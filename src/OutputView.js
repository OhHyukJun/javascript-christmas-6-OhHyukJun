import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
    printMenu(menus) {
        MissionUtils.Console.print("<주문 메뉴>");
        menus.forEach(menu => {
            MissionUtils.Console.print(`${menu[0]} ${menu[1]}개`);
        });
    },

    printTotalPrice(totalPrice) {
        MissionUtils.Console.print(`<할인 전 총주문 금액>\n${totalPrice}원`);
    },

    printGiveProduct(giveProduct) {
        MissionUtils.Console.print(`<증정 메뉴>\n${giveProduct.product}`);
    },

    printDiscount(printDiscount) {
        MissionUtils.Console.print(`<혜택 내역>\n${printDiscount}`);
    },

    printAfterPrice(afterPrice) {
        MissionUtils.Console.print(`<총혜택 금액>\n${afterPrice.totalBenifit}원`);
        MissionUtils.Console.print(`<할인 후 예상 결제 금액>\n${afterPrice.afterPrice}원`);
    },

    printChristmasBadge(christmasBadge) {
        MissionUtils.Console.print(`<12월 이벤트 배지>\n${christmasBadge}`);
    }
}

export default OutputView;
