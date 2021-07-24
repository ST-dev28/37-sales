class Sales {
    constructor(shopName, curr){  
    this.shopName = shopName;
    this.curr = curr; 
    this.itemsData = []; 
    //console.log(this.itemsData);
    }
    
    intro() {
        console.log(`It's an one time sales activity called "${this.shopName}".`);
    }
    addItem(itemName, itemQty, itemCost, itemPrice) {
        this.itemsData.push({
            name: itemName,
            qty: itemQty,
            cost: itemCost,
            price: itemPrice,
        })
        if (itemQty <= 1) {
        console.log(`"${this.shopName}" bought ${itemQty} ${itemName} for cost ${itemCost} ${this.curr} and plans to sell it for price ${itemPrice} ${this.curr}.`);
        } else {
            console.log(`"${this.shopName}" bought ${itemQty} ${itemName}'s for cost ${itemCost} ${this.curr} and plans to sell it for price ${itemPrice} ${this.curr}.`);
        }
    }
    itemsBought() {
        console.log(`Total items bought by "${this.shopName}":`);
        console.log('====================');
        let index = 0;
        for (const item of this.itemsData) {
            console.log(`${++index}) ${item.name} - ${item.qty}pcs for ${item.cost} ${this.curr}/pc;`);
        }
        console.log('====================');
    }
    itemsForSales() {
        console.log(`"${this.shopName}" offers:`);
        console.log('====================');
        let index = 0;
        for (const item of this.itemsData) {
                console.log(`${++index}) ${item.name} - ${item.qty}pcs for ${item.price} ${this.curr}/pc;`);
        }
        console.log('====================');
    }
    totalCost() {   
        let costTotal = 0;
        for (const item of this.itemsData) {
            costTotal += item.qty * item.cost;
        }
        this.costTotal = costTotal;
        console.log(`"${this.shopName}" bought furniture for ${this.costTotal} EUR totally.`);
    }
    turnover() {   
        let priceTotal = 0;
        for (const item of this.itemsData) {
            priceTotal += item.qty * item.price;
        }
        this.priceTotal  = priceTotal;
        console.log(`"${this.shopName}" turnover is ${this.priceTotal} EUR totally.`);
    }

    totalProfit() {
        const profit = this.priceTotal - this.costTotal;
        console.log(`"${this.shopName}" profit is ${profit} EUR totally.`);
        this.profit = profit;
    }
    surchargeAverage() {
        let count = 0;
        for (const item of this.itemsData) {
            count += item.qty;
            this.count = count;
            const average = this.profit / this.count;
            this.average = average;
        }
        console.log(`Average of total surcharge is ${this.average} EUR.`);
    }
}

module.exports = Sales;