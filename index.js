// grab the lis inside the "Ordered Food" list
const orderedFoodLIs = document.querySelectorAll(`#ordered-foods > li`);

// add event listeners to each li for when they are clicked
orderedFoodLIs.forEach((foodItem) => {

  foodItem.addEventListener('click', (event) => {
    // append the li that was clicked to the "Delivered" list
    const deliveredFoodsOL = document.querySelector(`#delivered-foods`);
    deliveredFoodsOL.append(foodItem);
  });

});








