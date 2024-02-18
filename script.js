const emptyBasket = document.querySelector(".empty_basket");
const shoppingList = document.querySelector(".shopping_list_items");
const itemInput = document.querySelector(".item_input");

// CREATE ITEM
const itemToShoppingInput = document.createElement("input");
itemToShoppingInput.placeholder = "Co si chcete koupit...";
itemInput.appendChild(itemToShoppingInput);

// CREATE LIST
const elToShopping = document.createElement("ul");
elToShopping.style.listStyleType = "none";
shoppingList.appendChild(elToShopping);

// CREATE ITEM
const createShoppingItem = ({ title, completed = false }) => {
  const elItem = document.createElement("li");
  elItem.innerText = `${title}  `;
  elItem.classList.add("toShop");

  // CREATE CHECKMARK
  if (completed === true) {
    elItem.classList.add("completed");
  }
  const ElCheckMark = document.createElement("span");
  ElCheckMark.innerText = completed ? "✓" : "X";

  // CLICK CHECKMARK
  ElCheckMark.addEventListener("click", (e) => {
    if (e.target.innerText === "✓") {
      e.target.innerText = "X";
      e.target.classList.remove("completed");
      if (elItem.timeoutID !== undefined) {
        clearInterval(ElItem.timeoutID);
        ElItem.timeoutID = undefined;
      }
    } else if (e.target.innerText === "X") {
      e.target.innerText = "✓";
      e.target.classList.add("completed");

      elItem.timeoutID = setTimeout(() => {
        elItem.remove();
      }, 2000);
    }
  });
  elItem.appendChild(ElCheckMark);
  return elItem;
};

const initialToShop = [];

// ADD ITEM
const ToShop = initialToShop.map((toshop) => {
  const toShopItem = createShoppingItem({
    title: toshop.title,
    completed: toshop.completed,
  });

  elToShopping.appendChild(toShopItem);
});

// PUT ITEM TO LIST
itemToShoppingInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const newToShop = createShoppingItem({
      title: event.target.value,
      completed: false,
    });
    emptyBasket.style.display = "none";
    shoppingList.style.display = "block";
    ToShop.push(newToShop);
    elToShopping.appendChild(newToShop);
    itemToShoppingInput.value = "";
  }
});
