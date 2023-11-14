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
      const totalPrice = CalculateTotalPrice(menus);
      const giveProduct = GiveProduct(totalPrice);
      const printDiscount = PrintDiscounts(date,menus,totalPrice);
      const afterPrice = CalculateTotalDiscount(date, menus);
      const christmasBadge = ChristmasBadge(afterPrice);

      this.outputView.printMenu(menus);
      this.outputView.printTotalPrice(totalPrice);
      this.outputView.printGiveProduct(giveProduct);
      this.outputView.printDiscount(printDiscount);
      this.outputView.printAfterPrice(afterPrice);
      this.outputView.printChristmasBadge(christmasBadge);
      
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