import BaseTransferOrderOut from "./base-transfer-order-out";
import { Order } from "./Order";

export default class NotifyTransferOrderOutHandler extends BaseTransferOrderOut{

    public handlerTransferOrderOut(order: Order){
        console.log('Validate sector Notify')
        const validate = {
            approved: true,
            sector:'NOTIFY'
        }
        order.sectors = [...order.sectors, validate]
        return order;
    }
}