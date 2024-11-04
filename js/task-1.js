'use strict';

const categorList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categorList.length);

categorList.forEach(item => {
  const categorTitle = item.querySelector('h2').textContent;
  const items = item.querySelectorAll('ul li').length;

  console.log('Category:', categorTitle);
  console.log('Elements:', items);
});
