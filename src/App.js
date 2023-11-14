import InputView from "./InputView";
import OutputView from "./OutputView";
import { calculateTotalPrice } from "./CalculateTotal";
import { MissionUtils } from "@woowacourse/mission-utils";
import { GiveProduct } from "./Discount/GiveProduct";
import { calculateTotalDiscount } from "./Discount/TotalDiscount";
import { printDiscounts } from "./Discount/PrintDiscount";

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
      MissionUtils.Console.print(`<증정 메뉴>\n${giveProduct.product}`);

      //const printDiscount = printDiscounts(date,menus)
      //MissionUtils.Console.print(`<혜택 내역>\n${printDiscount}`);

      const afterPrice = calculateTotalDiscount(date, menus);
      MissionUtils.Console.print(`<총혜택 금액>\n${afterPrice.totalBenifit}원`);
      MissionUtils.Console.print(`<할인 후 예상 결제 금액>\n${afterPrice.afterPrice}원`);
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
