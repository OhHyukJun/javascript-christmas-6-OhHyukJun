import InputView from "./InputView";
import OutputView from "./OutputView";
import { calculateTotalPrice } from "./CalculateTotal";
import { MissionUtils } from "@woowacourse/mission-utils";
import { DailyDiscount } from "./Discount/DailyDiscount";
import { WeekendDiscount } from "./Discount/WeekendDiscount";
import { GiveProduct } from "./Discount/GiveProduct";
import { SpecialDiscount } from "./Discount/SpecialDiscount";

class App {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
  }
  async run() {
    try {
      const date = await this.inputView.readDate();
      const menus = await this.inputView.readMenu();

      MissionUtils.Console.print(`${date}`);
      this.outputView.printMenu(menus);

      const totalPrice = calculateTotalPrice(menus);
      MissionUtils.Console.print(`<할인 전 총주문 금액>\n${totalPrice}원`);
      const giveProduct = GiveProduct(totalPrice);
      MissionUtils.Console.print(`<증정 메뉴>\n ${giveProduct}`);
      const dailyDiscount = DailyDiscount(date);
      const weekendDiscount = WeekendDiscount(date, menus);
      const specialDiscount = SpecialDiscount(date);
      MissionUtils.Console.print(` ${dailyDiscount} ${weekendDiscount.weekdayDiscount} ${weekendDiscount.holidayDiscount} ${specialDiscount}`);
    } catch (error) {
      if (error.message.startsWith("[ERROR]")) {
        this.run(); 
      } else {
        throw error;  
      }
    }
  }
}

export default App;
