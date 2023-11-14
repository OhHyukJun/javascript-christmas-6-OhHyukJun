import { menuBoard } from "./Constants/menuBoard";

export function CalculateTotalPrice(menus) {
  let totalPrice = 0;
  menus.forEach(menu => {
    const menuName = menu[0];
    const menuCount = menu[1];
    totalPrice += menuBoard[menuName] * menuCount;
    });
  return totalPrice;
}