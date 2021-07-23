// čia dėti visą pavyzdinį kodą, kuris turėtų paaiškinti, 
//kaip naudotis jūsų sukurtu kodu

//const itemsData = require('./itemsData');
const Sales = require('./Sales');

const trade = new Sales('Oak furniture', 'EUR');
//const trade = new Sales(itemsData);

trade.intro();
// It's an one time sales activity called "Oak furniture".

trade.addItem('oak table', 2, 150, 200);
// "Oak furniture" bought 2 oak tables for cost 150 EUR and plans to sell is for price 400 EUR. 

trade.addItem('oak bench', 1, 110, 160);
// "Oak furniture" bought 1 oak bench for cost 220 EUR and plans to sell is for price 160 EUR. 

trade.addItem('oak chair', 4, 50, 80);
// "Oak furniture" bought 4 oak chairs for cost 200 EUR and plans to sell is for price 320 EUR. 

trade.addItem('oak cabinet', 2, 200, 280);
// "Oak furniture" bought 2 oak cabinets for cost 400 EUR and plans to sell is for price 560 EUR. 

trade.addItem('oak wardrobe', 1, 300, 400);
// "Oak furniture" bought 1 oak wardrobes for cost 300 EUR and plans to sell is for price 400 EUR. 

trade.itemsBought();
// Total items bought by "Oak furniture":
// ====================
// 1) oak table - 2pcs for 150 EUR/pc;
// 2) oak bench - 1pc for 110 EUR/pc;
// 3) oak chair - 4pcs for 50 EUR/pc;
// 4) oak cabinet - 2pcs for 200 EUR/pc;
// 5) oak wardrobe - 1pc for 300 EUR/pc;
// ====================

trade.itemsForSales();
// "Oak furniture" offers:
// ====================
// 1) oak table - 2pcs for 200 EUR/pc;
// 2) oak bench - 1pc for 160 EUR/pc;
// 3) oak chair - 4pcs for 80 EUR/pc;
// 4) oak cabinet - 2pcs for 280 EUR/pc;
// 5) oak wardrobe - 1pc for 400 EUR/pc;
// ====================
 
trade.totalCost();
// "Oak furniture" bought furniture for 1310 EUR totally.

trade.turnover();
// "Oak furniture" turnover is 1840 EUR totally.

trade.totalProfit();
// "Oak furniture" profit is 530 EUR totally.

trade.surchargeAverage();
// Average of total surcharge is 53 EUR.




