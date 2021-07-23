// čia dėti visą pavyzdinį kodą, kuris turėtų paaiškinti, 
//kaip naudotis jūsų sukurtu kodu

//const itemsData = require('./itemsData');
const Sales = require('./Sales');

const trade = new Sales('Oak furniture', 'EUR');
//const trade = new Sales(itemsData);

trade.intro();
// It's an one time sales activity called "Oak furniture".

trade.addItem('oak table', 150);
// Oak table cost is 150 EUR!

trade.addItem('oak bench', 110);
// Oak bench cost is 110 EUR!

trade.addItem('oak chair', 50);
// Oak chair cost is 50 EUR!

trade.addItem('oak cabinet', 200);
// Oak cabinet for 200 EUR!

trade.addItem('oak wardrobe', 300);
// Oak wardrobe cost is 300 EUR!

trade.qty();

trade.sellItem(1, 200);
// "Oak furniture" sells oak table for 200 EUR!

trade.sellItem(1, 160);
// "Oak furniture" sells oak bench for 160 EUR!

trade.sellItem(1, 80);
// "Oak furniture" sells oak chair for 80 EUR!

trade.sellItem(1, 280);
// "Oak furniture" sells oak cabinet for 280 EUR!

trade.sellItem(1, 400);
// "Oak furniture" sells oak wardrobe for 400 EUR!





