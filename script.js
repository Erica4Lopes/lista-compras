const form = document.getElementById('addItemForm')
const input = document.getElementById('itemInput')
const list = document.getElementById('shoppingList')

let items = []
const savedItems = localStorage.getItem('shoppingList')
if (savedItems) {
    items = JSON.parse(savedItems)
}

function addItemToList(itemText) {  
    const li = document.createElement('li')

    const span = document.createElement('span')
    span.textContent = itemText

    span.addEventListener('click', function() {
    span.classList.toggle('completed')
    })

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click', function() {
        const index = items.indexOf(itemText)
        items.splice(index, 1)
        localStorage.setItem('shoppingList', JSON.stringify(items))
        list.removeChild(li)
    })

    li.appendChild(span)
    li.appendChild(deleteBtn)
    list.appendChild(li)
}

items.forEach(function(item) {
    addItemToList(item)
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const itemText = input.value
    if (itemText === '') return;
    console.log(itemText)

    items.push(itemText)
    localStorage.setItem('shoppingList', JSON.stringify(items))

    addItemToList(itemText)

    input.value = ''
})