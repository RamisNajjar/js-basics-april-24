function foodDelivery(input) {
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetatianMenu = Number(input[2]);

    let chikenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetarianMenuPrice = 8.15;
    let delivery = 2.50;

    let totalChikenMenus = chikenMenu * chikenMenuPrice;
    let totalFishMenus = fishMenu * fishMenuPrice;
    let totalVegetarianMenus = vegetatianMenu * vegetarianMenuPrice;

    let totalMenuPrice = totalChikenMenus + totalFishMenus + totalVegetarianMenus;
    let desert = 20 / 100 * totalMenuPrice; 

    let orderPrice = totalMenuPrice + desert + delivery;


    console.log(orderPrice)

}

foodDelivery(["2", "4", "3"])
