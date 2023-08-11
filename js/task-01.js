const mainList = document.querySelector("#categories");

const mainListElements = mainList.children;
console.log(`Number of categories: ${mainListElements.length}`);

const animalsListTitle = mainListElements[0].firstElementChild;
console.log(`Category: ${animalsListTitle.textContent}`);

const animalsListElements = mainListElements[0].lastElementChild.children;
console.log(`Elements: ${animalsListElements.length}`);

const productsListTitle = mainListElements[1].firstElementChild;
console.log(`Category: ${productsListTitle.textContent}`);

const productsListElements = mainListElements[1].lastElementChild.children;
console.log(`Elements: ${productsListElements.length}`);

const technologiesListTitle = mainListElements[2].firstElementChild;
console.log(`Category: ${technologiesListTitle.textContent}`);

const technologiesListElements = mainListElements[2].lastElementChild.children;
console.log(`Elements: ${technologiesListElements.length}`);
