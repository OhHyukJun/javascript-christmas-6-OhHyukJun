import { menuBoard } from "./menuBoard";

export function calculateTotalPrice(menus) {
  let totalPrice = 0;
  menus.forEach(menu => {
    const menuName = menu[0];
    const menuCount = menu[1];
    if (!menuBoard.hasOwnProperty(menuName)) {
      throw new Error('[ERROR] 유효하지 않은 메뉴입니다.');
    }
    totalPrice += menuBoard[menuName] * menuCount;
    });
  return totalPrice;
}