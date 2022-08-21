// Ram Price

document.getElementById('first-ram').addEventListener('click', function (clickRam1) {

    const firstRam = 100;

    // const firstRamPrice = document.getElementById('ram-price');
    // const firstRamPriceString = firstRamPrice.innerText;
    // const ramPriceFirst = parseFloat(firstRamPriceString);

    const selctedRam = getElementText('ram-price');


    const ramPrice = getElementTextValue('ram-price', firstRam);
    
    totalPriceOfBuildPc();

});
document.getElementById('second-ram').addEventListener('click', function (clickRam2) {

    const secondRam = 150;


    const selctedRam = getElementText('ram-price');

    const ramPrice = getElementTextValue('ram-price', secondRam);

    totalPriceOfBuildPc();



})

// SSD Card Price

document.getElementById('ssd256gb-card').addEventListener('click', function () {

    const ssd256gb = 120;

    const selectedSsd = getElementText('ssd-price');

    const ssdPrice = getElementTextValue('ssd-price', ssd256gb);


    totalPriceOfBuildPc();


})

document.getElementById('ssd512gb-card').addEventListener('click', function () {

    const ssd512gb = 140;

    const selectedSsd = getElementText('ssd-price');

    const ssdPrice = getElementTextValue('ssd-price', ssd512gb);

    totalPriceOfBuildPc();



})

document.getElementById('ssd1tb-card').addEventListener('click', function () {

    const ssd1tb = 180;

    const selectedSsd = getElementText('ssd-price');

    const ssdPrice = getElementTextValue('ssd-price', ssd1tb);

    totalPriceOfBuildPc();
 
})

// Delivary cost

document.getElementById('free-delivery').addEventListener('click', function () {
    const charge = 0;

    const selectedCharge = getElementText('delivery-cost');

    const deliveryCharge = getElementTextValue('delivery-cost', charge);

    totalPriceOfBuildPc();

  
})

document.getElementById('delivery-charge').addEventListener('click', function () {
    const charge = 30;

    const selectedCharge = getElementText('delivery-cost');

    const deliveryCharge = getElementTextValue('delivery-cost', charge);

    totalPriceOfBuildPc();

    


})
