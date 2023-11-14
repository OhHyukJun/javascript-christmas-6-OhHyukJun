import { MissionUtils } from "@woowacourse/mission-utils";
import { menuBoard } from "./Constants/menuBoard";
import { menuCategories } from "./Constants/menuBoard";

const InputView = {
    async readDate() {
        const input = await MissionUtils.Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");
        if(isNaN(input) || input < 1 || input > 31) 
            throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
        return input;
    },

    async readMenu() {
        const menuInput = await MissionUtils.Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n");
        const menus = menuInput.split(',').map(menu => menu.trim().split('-'));
        const menuNames = menus.map(menu => menu[0]);
        const menuCounts = menus.map(menu => Number(menu[1]));
        const menuSet = new Set(menuNames);
        const invalidMenuCount = menuCounts.some(count => isNaN(count) || count < 1);
        const invalidMenuName = menuNames.some(name => !Object.keys(menuBoard).includes(name));
        const isOnlyDrink = menuNames.every(name => menuCategories['음료'].includes(name));

        if (menuNames.length !== menuSet.size || invalidMenuCount || invalidMenuName || isOnlyDrink)  throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');

        return menus;
    }
}

export default InputView;