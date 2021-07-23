
let thead = document.querySelector('thead');
let tr = document.querySelectorAll('.sort1');
let tbody = document.querySelector('tbody');

thead.addEventListener('click', ({ target }) => {
  const index = [...target.parentNode.cells].indexOf(target);
  target.dataset.order = -(target.dataset.order || -1);
  for (let cell of target.parentNode.cells) {
    cell.classList.toggle('sorted', cell == target)
  }

  func(target.dataset.order, index);


})

function func(c, index) {
  let sorted = [...tr].sort(function (a, b) {      ////сортировка числа 1 столбца по возрастанию
    if (index === 0 || index === 3) {
      return c * (b.children[index].innerText - a.children[index].innerText);
    } else if (a.children[index].innerText > b.children[index].innerText) {
      return -c;
    } else {
      return c;
    }
  })
  tbody.innerHTML = '';
  for (let ele of sorted) {
    tbody.appendChild(ele);
  }
}