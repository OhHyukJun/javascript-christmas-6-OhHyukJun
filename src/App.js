import InputView from "./InputView";
import OutputView from "./OutputView";
import { CalculateTotalPrice } from "./CalculateTotal";
import { MissionUtils } from "@woowacourse/mission-utils";
import { GiveProduct } from "./Discount/GiveProduct";
import { CalculateTotalDiscount } from "./Discount/TotalDiscount";
import { PrintDiscounts } from "./Discount/PrintDiscount";
import { ChristmasBadge } from "./ChristmasBadge";

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

      const totalPrice = CalculateTotalPrice(menus);
      MissionUtils.Console.print(`<할인 전 총주문 금액>\n${totalPrice}원`);

      const giveProduct = GiveProduct(totalPrice);
      MissionUtils.Console.print(`<증정 메뉴>\n${giveProduct.product}`);

      const printDiscount = PrintDiscounts(date,menus,totalPrice);
      MissionUtils.Console.print(`<혜택 내역>\n${printDiscount}`);

      const afterPrice = CalculateTotalDiscount(date, menus);
      MissionUtils.Console.print(`<총혜택 금액>\n${afterPrice.totalBenifit}원`);
      MissionUtils.Console.print(`<할인 후 예상 결제 금액>\n${afterPrice.afterPrice}원`);

      const christmasBadge = ChristmasBadge(afterPrice);
      MissionUtils.Console.print(`<12월 이벤트 배지>\n${christmasBadge}`);
    } catch (error) {
      if (error.message.startsWith("[ERROR]")) {
        MissionUtils.Console.print(error.message);
        //this.run(); 
      } else {
        throw error;  
      }
    }
  }
}

export default App;
