// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  const subtotal = parseInt(price) * quantity;
  const subtotalTd = product.querySelector(".subtotal span");

  subtotalTd.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const productList = document.querySelectorAll(".product"); // CREO ESTE QUERY SELECTOR PARA AGRUPAR TODOS LOS ELEMENTOS CON LA CLASE PRODUCT
  let total = 0;
  
  productList.forEach(item => total += updateSubtotal(item));

  // ITERATION 3
  const totalPrice = document.querySelector("#total-value span");

  totalPrice.innerText = total;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const row = target.parentNode.parentNode;
  // console.log(row);
  
  const parent = row.parentNode;
  // console.log(parent);

   parent.removeChild(row);

  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector(".create-product");
  let newProdNameInput;
  let newProdNameValue;
  let newProdPriceInput;
  let newProdPriceValue;
  //... your code goes here -REVISAR DE DIEGO'S REPO-
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach(button => button.addEventListener("click", removeProduct));


  // PARA CREAR PRODUCTOS
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }

  

});
