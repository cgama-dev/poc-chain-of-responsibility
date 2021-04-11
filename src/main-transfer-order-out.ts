import BaseTransferOrderOut from "./base-transfer-order-out";
import { Order } from "./Order";

export default class MainTransferOrderHandler extends BaseTransferOrderOut{

    public handlerTransferOrderOut(order: Order):Order{
        return super.handlerTransferOrderOut(order);
    }
}