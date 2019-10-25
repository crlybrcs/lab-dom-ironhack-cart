function deleteItem(e) {}

function getPriceByProduct(itemNode) {
  const priceString = itemNode.querySelector(".price").innerText;
  const parsedPrice = parseFloat(priceString.slice(1));

  const quantity = itemNode.querySelector(".quantity").value;

  return parsedPrice * quantity;
}

function updatePriceByProduct(productPrice, index) {
  const product = document.getElementsByClassName("product-wrapper")[index];

  //   product.getElementsByClassName("total-price")[0]
  product.querySelector(".total-price").innerText =
    "$" + productPrice.toFixed(2);
}

function getTotalPrice() {
  //   const products = document.getElementsByClassName('product-wrapper');
  const products = document.querySelectorAll(".product-wrapper");

  const totalSum = Array.from(products).reduce(function(sum, product, index) {
    const price = getPriceByProduct(product);

    updatePriceByProduct(price, index);

    return sum + price;
  }, 0);

  //   document.querySelector('#total-price')
  document.getElementById("total-price").innerText = "$" + totalSum.toFixed(2);
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  //   createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
