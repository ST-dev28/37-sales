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
        console.log(`"${this.shopName}" bought ${itemQty} ${itemName} for cost ${itemCost} ${this.curr} and plans to sell it for price ${itemPrice} ${this.curr}.`);
    }
    itemsBought() {
        console.log(`Total items bought by "${this.shopName}":`);
        console.log('====================');


        console.log('====================');
    }
}

module.exports = Sales;