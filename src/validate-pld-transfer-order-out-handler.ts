import BaseTransferOrderOut from "./base-transfer-order-out";
import { Order } from "./Order";

export default class ValidatePldOrderOutHandler extends BaseTransferOrderOut{

    public handlerTransferOrderOut(order: Order){
        console.log('Validate Order PLD')
        const validate = {
            approved: true,
            sector:'VALIDATEPLD'
        }
        order.sectors = [...order.sectors, validate]
        return super.handlerTransferOrderOut(order);
    }
}