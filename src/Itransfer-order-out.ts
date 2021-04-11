import { Order } from "./Order";

export default interface ITransferOrderOut {
    setNextHandlerTransferOrderOut(handler: ITransferOrderOut): ITransferOrderOut;
    handlerTransferOrderOut(order: Order): Order;
    handlerTransferOrderOutException(): void;
}