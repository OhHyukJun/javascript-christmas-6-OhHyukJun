import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
    printMenu(menus) {
        MissionUtils.Console.print("<주문 메뉴>");
        menus.forEach(menu => {
            MissionUtils.Console.print(`${menu[0]} ${menu[1]}개\n`);
        });
    }

}

export default OutputView;