const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector('#ingredients');

const elements = ingredients.map((ingredient) => {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList.add("item");

  return list;
})

ingredientsAll.append(...elements)

