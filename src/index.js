// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 let price= product.querySelector('.price > span').innerHTML;
  let quantity= product.querySelector('.quantity > input').value;
//  console.log(price, quantity);
  let subtotal= price*quantity;
  product.querySelector('.subtotal > span').innerHTML= subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
	const products= document.querySelectorAll('.product');
	products.forEach((product)=> {
		updateSubtotal(product);
	});

  // ITERATION 3
  //... your code goes here
	const totalElem= document.querySelectorAll('.subtotal> span');
	let sum=0;
	totalElem.forEach((sub)=> sum+=Number(sub.innerHTML));
//	console.log(sum);
	document.querySelector('#total-value > span').innerHTML= sum;
}
// ITERATION 4

	function removeProduct(event) {
	  const target = event.currentTarget.parentNode.parentNode;
    const lineTab= target.parentNode;
    const removedLine= lineTab.removeChild(target);
	  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  newLineElement= document.createElement('tr');
  newLineElement.classList.add('product');

  prodNameElement= document.createElement('td');
  prodPriceElement= document.createElement('td');
  prodQuantityElement= document.createElement('td');
  prodTotalElement= document.createElement('td');
  prodBtnElement= document.createElement('td');

  newLineElement.append(prodNameElement);
  nameSpan= document.createElement('span');
  nameSpan.innerHTML= document.querySelector('.create-product>td:first-child>input').value;
  prodNameElement.classList.add('name');
  prodNameElement.append(nameSpan);
  
  newLineElement.append(prodPriceElement);
  prodPriceElement.classList.add('price');
  prodPriceElement.innerHTML= "$";
  priceElement= document.createElement("span");
  priceElement.innerHTML= document.querySelector('.create-product>td:nth-child(2)>input').value;
  prodPriceElement.append(priceElement);
  
  newLineElement.append(prodQuantityElement);
  prodQuantityElement.classList.add('quantity');
  chooseQuantityElement= document.createElement('input');
  chooseQuantityElement.setAttribute('type', 'number');
  chooseQuantityElement.setAttribute('value', '0');
  chooseQuantityElement.setAttribute('min', '0');
  chooseQuantityElement.setAttribute('placeholder', 'Quantity');
  prodQuantityElement.append(chooseQuantityElement);

  newLineElement.append(prodTotalElement);
  prodTotalElement.classList.add("subtotal");
  totalSpan= document.createElement('span');
  totalSpan.innerHTML= 0;
  prodTotalElement.append(totalSpan);

  newLineElement.append(prodBtnElement);
  prodBtnElement.classList.add('action');
  BtnElement= document.createElement('button');
  BtnElement.classList.add('btn');
  BtnElement.classList.add('btn-remove');
  BtnElement.innerHTML= 'Remove';
  prodBtnElement.append(BtnElement);

  tbodyElement= document.querySelector('tbody');
  tbodyElement.append(newLineElement);
 
  let removeBtn= document.querySelectorAll('.btn-remove');
  removeBtn.forEach((btn)=> {
    btn.addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const createBtn= document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);

  let removeBtn= document.querySelectorAll('.btn-remove');
  removeBtn.forEach((btn)=> {
    btn.addEventListener('click', removeProduct);
  });
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
});
