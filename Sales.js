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
            purchased: true
        })
        console.log(`"${this.shopName}" bought ${itemQty} ${itemName} for cost ${itemCost} ${this.curr} and plans to sell it for price ${itemPrice} ${this.curr}.`);
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
        console.log(this.itemsData);
    }      
}

module.exports = Sales;