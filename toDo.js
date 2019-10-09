var removeSVG = 'T';
var completeSVG = 'V';

document.getElementById('addEvent').addEventListener('click', function(){
    var value = document.getElementById('eventItem').value;

    if(value){
        addEventItem(value);
        document.getElementById('eventItem').value = '';
    }
});

//Add items to list
function addEventItem(event){
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = event;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    //adding event to remove event
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    complete.addEventListener('click', completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);

    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}

function removeItem(){
    var event = this.parentNode.parentNode;
    var parent = event.parentNode;

    parent.removeChild(event);
}

function completeItem(){
    var event = this.parentNode.parentNode;
    var parent = event.parentNode;
    var id = parent.id;

    var target = (id =='todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(event);
    target.insertBefore(event, target.childNodes[0]);
}