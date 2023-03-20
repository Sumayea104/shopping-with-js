// console.log('clicked');
document.getElementById('first-card').addEventListener('click', function () {
    // console.log('btn clicked')

    // step -01 get data from html -using id
    const productName = document.getElementById('first-name').innerText;
    // console.log(firstElement);
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    // console.log(productName, productPrice, productQuantity);

    // {{multiply}}
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(priceTotal);

    //  step -02 show the data
    displayData(productName, productPrice, productQuantity, priceTotal);
});

// using event object from browser
document.getElementById('second-card').addEventListener('click',function(e){
// console.log(e.target.parentNode.parentNode.children[0].innerText);
const pName = e.target.parentNode.parentNode.children[0].innerText;
// console.log(productName);
const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
// console.log(productPrice);

const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
// console.log(productName, productPrice, productQuantity);

const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
console.log(sumTotal)

displayData(pName, pPrice, pQuantity, sumTotal);
});

// common function to display data
function displayData(pName, pPrice, pQuantity, sumTotal){
    const container = document.getElementById('table')
}
1;42



let count = 0;
function displayData(productName, productPrice, productQuantity, priceTotal) {
    // console.log('called')
    count += 1;
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${count}</td>
<td>${productName}</td>
<td>${productPrice}</td>
<td>${productQuantity}</td>
<td>${priceTotal}</td>
`;
    container.appendChild(tr)
}
