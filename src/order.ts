export class Order {
    public approved = false;
    public type = null;
    public customer = null;
    public from = null;
    public to = null
    public createTime = null;
    public expirationTime =  null;
    public sectors = [{approved: false,  sector: null}];
    

    constructor(public value: number){
        
    }
}