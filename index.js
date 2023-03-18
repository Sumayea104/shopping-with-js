// console.log('clicked');
document.getElementById('first-card').addEventListener('click', function () {
    // console.log('btn clicked')

    // step -01 get data from html -using id
    const productName = document.getElementById('first-name').innerText;
    // console.log(firstElement);
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    // console.log(productName, productPrice, productQuantity);
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(priceTotal);

    //  step -02 show the data
    displayData(productName, productPrice, productQuantity, priceTotal);
})

function displayData(productName, productPrice, productQuantity, priceTotal) {
    console.log('called')
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${1}</td>
<td>${productName}</td>
<td>${productPrice}</td>
<td>${productQuantity}</td>
<td>${priceTotal}</td>
`;
    container.appendChild(tr)
}
