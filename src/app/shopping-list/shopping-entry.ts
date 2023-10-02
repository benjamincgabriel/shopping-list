export class ShoppingEntry {
    public itemName: string;
    public amount?: string;
    
    constructor(itemName: string, amount?: string) {
        this.itemName = itemName;
        this.amount = amount;
    }
}
