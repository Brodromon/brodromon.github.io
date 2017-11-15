var removeFa = '<i class="fa fa-trash-o"></i>';
var completeFa = '<i class="fa fa-check"></i>';

document.getElementById('add').addEventListener("click", function() {
   var value = document.getElementById('item').value;
    
    if (value) {
        addItemTodo(value);
        document.getElementById('item').value = '';
    }
});

function removeItem () {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    
    parent.removeChild(item);
}

function completeItem () {
   var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    
    var id = parent.id;
    
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
    
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}


function addItemTodo(text) {
    console.log('hi');
    var list = document.getElementById('todo');
    
    var item = document.createElement('li');
    item.innerText = text;
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeFa;
    
    // Click event for remove item from list
    remove.addEventListener('click', removeItem);
    
    
     var border = document.createElement('div');
    border.classList.add('border');
    
   var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeFa;
    
    // Click event for complete task from list
    complete.addEventListener('click', completeItem);
    
    buttons.appendChild(remove);
    buttons.appendChild(border);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    
    list.insertBefore(item, list.childNodes[0]);
}