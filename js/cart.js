function updateProductNumber(product, price, isIncreasing) {
    const productNumber = document.getElementById(product + '-number');
    let productValue = parseInt(productNumber.value);
    if (isIncreasing) {
        productValue = productValue + 1;
    } else if (productValue > 0) {
        productValue = productValue - 1;
    }
    productNumber.value = productValue;

    // Update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productValue * price;
    calculateTotal();
}

function getElementValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productValue = parseInt(productInput.value);
    return productValue;
}

function calculateTotal() {
    const phoneTotal = getElementValue('phone') * 1219;
    const caseTotal = getElementValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // Update HTML elements
    document.getElementById('sub-total').innerHTML = subTotal;
    document.getElementById('tax-amount').innerHTML = tax;
    document.getElementById('total-price').innerHTML = totalPrice;
}

document.getElementById('case-plus').addEventListener('click', function() {


    
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function() {



    updateProductNumber('case', 59, false);
});

document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false);
});
