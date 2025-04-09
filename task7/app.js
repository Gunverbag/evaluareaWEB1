function addListItem() {
    const list = document.getElementById('myList');
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент';
    list.appendChild(newItem);
}

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addListItem);