const categorList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categorList.length);

categorList.forEach(value => {
  const categorTitle = value.querySelector('h2').textContent;
  const items = value.querySelectorAll('ul li').length;

  console.log('Category:', categorTitle);
  console.log('Elements:', items);
});
