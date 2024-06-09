//
const categories = document.querySelectorAll('.item').length;
 console.log(`Number of categories : ${categories}`);
const items = document.querySelectorAll('.item')
items.forEach(function(item) {
    const itemTitle = item.querySelector('h2').textContent;
    console.log(`Category: ${itemTitle}`);
    const elementNumber = item.querySelectorAll('ul li').length;
    console.log(`Elements : ${elementNumber}`);
})