import { Order } from "./Order";
import ITransferOrderOut from "./Itransfer-order-out";

export default abstract class  BaseTransferOrderOut implements ITransferOrderOut {

    protected nextHandleTranferOrderOut: BaseTransferOrderOut | null = null;

    public setNextHandlerTransferOrderOut(handler: BaseTransferOrderOut):BaseTransferOrderOut {
        this.nextHandleTranferOrderOut = handler;
        return handler;
    }

    public handlerTransferOrderOut(order: Order): Order{
        if(this.nextHandleTranferOrderOut) 
            return this.nextHandleTranferOrderOut.handlerTransferOrderOut(order);

        return order;
    }

    public handlerTransferOrderOutException(): void{
        throw new Error('Error transfer order ');
    }
}