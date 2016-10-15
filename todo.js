
window.onload = function() {
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  function addToDoItem() {
    var toDoItem = document.createElement("LI");
    toDoItem.textContent = document.getElementById('todo-input').value;
    if (toDoItem.textContent) {
      document.getElementsByClassName('todo-list-items')[0].appendChild(toDoItem);
      doneButton.classList.remove('liked');
      doneButton.innerHTML = "Done";
      document.querySelector('h1').style.color = "black";
      document.getElementById('todo-input').value = "";
    }
  }

  function markAsDone() {
    var toDoList = document.querySelectorAll('.todo-list-items li');
    var doneItem = toDoList[0];
    var doneList = document.querySelector('.done-list-items');
    
    doneItem.classList.add('done');
    doneList.insertBefore(doneItem, doneList.firstChild);

    toDoList = document.querySelectorAll('.todo-list-items li');
    if (toDoList.length <= 0) {
      doneButton.classList.add('liked');
      doneButton.innerHTML = "Liked!";
      document.querySelector('h1').style.color = "red";
    }
  }
  
}
