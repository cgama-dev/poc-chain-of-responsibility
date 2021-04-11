import BaseTransferOrderOut from "./base-transfer-order-out";
import { Order } from "./Order";

export default class ProcessTransferOrderOutHandler extends BaseTransferOrderOut{

    public handlerTransferOrderOut(order: Order){
        console.log('Validate Process order')
        const validate = {
            approved: true,
            sector:'PROCESS'
        }
        order.sectors = [...order.sectors, validate]
        return super.handlerTransferOrderOut(order);
    }
}