// console.log('clicked');
document.getElementById('first-card').addEventListener('click',function(){
    // console.log('btn clicked')

    // get data from html -using id
    const productName = document.getElementById('first-name').innerText;
    // console.log(firstElement);
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    // console.log(productName, productPrice, productQuantity);
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(priceTotal);
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr)
})