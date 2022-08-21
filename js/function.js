function getElementText(price){
    
    const itemPrice = document.getElementById(price);
    const totalPriceString = itemPrice.innerText;
    const totalPrice1 = parseFloat(totalPriceString);

    return totalPrice1;
}


function getElementTextValue(prices , textValue){
    const itemValue = document.getElementById(prices);
    itemValue.innerText = textValue;
}

function totalPriceOfBuildPc(){
    const ram = getElementText('ram-price');
    const ssd = getElementText('ssd-price');
    const deliveryCharges = getElementText('delivery-cost');

    const totalPrices = ram + ssd + deliveryCharges ;

    const totalPriceOfBuildPc = getElementTextValue('total-price',totalPrices);

    const totals = getElementText('total-price');

    getElementTextValue('discount-total',totals);
}