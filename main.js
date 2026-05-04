const categories = [
  {
    id: 1,
    title: 'Accessories',
    image: 'images/category1.svg',
    count: 84,
  },
  {
    id: 2,
    title: 'Food',
    image: 'images/category2.svg',
    count: 64,
  },
  {
    id: 3,
    title: 'Furniture',
    image: 'images/category3.svg',
    count: 22,
  },
  {
    id: 4,
    title: 'Bags',
    image: 'images/category4.svg',
    count: 16,
  }
];

const categoriesContainer = document.getElementById('categoriesContainer');


categories.forEach((category) => {
  const card = document.createElement('div');
  card.className = 'card';

  
  card.innerHTML = `
    <img src="${category.image}" alt="${category.title.toLowerCase()}-img">
    <h4>${category.title}</h4>
    <p>${category.count} products</p>
  `;

  
  categoriesContainer.appendChild(card);
});