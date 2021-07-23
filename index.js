// čia dėti visą pavyzdinį kodą, kuris turėtų paaiškinti, 
//kaip naudotis jūsų sukurtu kodu

//const itemsData = require('./itemsData');
const Sales = require('./Sales');

const trade = new Sales('Oak furniture', 'EUR');
//const trade = new Sales(itemsData);

trade.intro();
// It's an one time sales activity called "Oak furniture".

trade.addItem('oak table', 1, 150, 200);
// Bought 1pc oak table for cost 150 EUR and plans to sell is for 200 EUR. 

trade.addItem('oak bench', 2, 110, 160);
// Bought 2pcs oak wardrobe for cost 220 EUR and plans to sell is for 320 EUR. 

trade.addItem('oak chair', 4, 50, 80);
// Bought 4pcs oak chair for cost 200 EUR and plans to sell is for 320 EUR. 

trade.addItem('oak cabinet', 2, 200, 280);
// Bought 2pcs oak cabinet for cost 400 EUR and plans to sell is for 560 EUR. 

trade.addItem('oak wardrobe', 1, 300, 400);
// Bought 1pc oak wardrobe for cost 300 EUR and plans to sell is for 400 EUR. 

trade.itemsBought();
// Total items bought by "Oak furniture":
// ====================
// 1) oak table - 1pc for 150 EUR;
// 2) oak bench - 2pcs for 220 EUR;
// 3) oak chair - 4pcs for 200 EUR;
// 4) oak cabinet - 2pcs for 400 EUR;
// 5) oak wardrobe - 1pc for 300 EUR;
// ====================

trade.itemsForSales();
// "Oak furniture" offers:
// ====================
// 1) oak table - 1pc for 200 EUR/pc;
// 2) oak bench - 2pcs for 160 EUR/pc;
// 3) oak chair - 4pcs for 50 EUR/pc;
// 4) oak cabinet - 2pcs for 400 EUR/pc;
// 5) oak wardrobe - 1pc for 300 EUR/pc;
// ====================
 
trade.totalCost();
// "Oak furniture" bought furniture for 1270 EUR totally!

trade.totalProfit();
// "Oak furniture" profit is 530 EUR totally!

trade.surchargeAverage();
// Average of total surcharge is 53 EUR!




