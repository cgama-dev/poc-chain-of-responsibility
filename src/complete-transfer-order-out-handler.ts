import BaseTransferOrderOut from "./base-transfer-order-out";
import { Order } from "./Order";

export default class CompleteTransferOrderOutHandler extends BaseTransferOrderOut{

    public handlerTransferOrderOut(order: Order){
        console.log('Validate Complete')
        const validate = {
            approved: true,
            sector:'COMPLETE'
        }
        order.sectors = [...order.sectors, validate]
        return super.handlerTransferOrderOut(order);
    }
}