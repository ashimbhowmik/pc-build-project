 document.getElementById('apply').addEventListener('click',function(){
    

    const discountTotal = getElementText('total-price');

    // const priveousDiscountTotal = 

    const discountCode = document.getElementById('promo-code');
    const promoCodeStringValue = discountCode.value;
    // const promoCodeValue = parseFloat(promoCodeStringValue);

    if(isNaN(promoCodeStringValue)){
        if( promoCodeStringValue === 'misterio'){
            const previousDiscountTotal = discountTotal * ( 20 / 100 );

            const newDiscountTotal = discountTotal - previousDiscountTotal ;

            getElementTextValue('discount-total',newDiscountTotal);
        }
        else{
            alert('Not Matched the promo code...!');
        }
    }
    else{
        alert('Not Matched the promo code...!');
    }

    discountCode.value = '';

 })