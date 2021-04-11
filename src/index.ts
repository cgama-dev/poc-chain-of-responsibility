
import { Order } from "./Order";
import MainTransferOrderHandler from "./main-transfer-order-out";
import ValidatePldOrderOutHandler from "./validate-pld-transfer-order-out-handler";
import ProcessTransferOrderOutHandler from "./process-transfer-order-out-handler";
import CompleteTransferOrderOutHandler from "./complete-transfer-order-out-handler";
import NotifyTransferOrderOutHandler from "./notify-transfer-order-out-handler";

// lambda function
function handler(){
    const order = new Order(900)

    const transferOrderMain = new MainTransferOrderHandler()

    transferOrderMain
        .setNextHandlerTransferOrderOut(new ValidatePldOrderOutHandler())
        .setNextHandlerTransferOrderOut(new ProcessTransferOrderOutHandler())
        .setNextHandlerTransferOrderOut(new CompleteTransferOrderOutHandler())
        .setNextHandlerTransferOrderOut(new NotifyTransferOrderOutHandler())

    transferOrderMain.handlerTransferOrderOut(order)

    console.log(order)
}

handler()