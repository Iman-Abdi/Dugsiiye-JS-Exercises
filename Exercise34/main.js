const list = document.querySelector('#list');

function addItem(){

    const newElement = document.createElement("li");
    newElement.textContent="New Item";
    list.appendChild(newElement);
}


function removeItem(){
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }else{
        alert("No more items to remove!");
    }
}