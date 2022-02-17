const addTaskButton = document.querySelector('#criar-tarefa');
let orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const removeButton = document.querySelector('#apaga-tudo');
const removeDoneTasksButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const selectedRemoveButton = document.querySelector('#remover-selecionado');

addTaskButton.addEventListener('click', function () {
  let newItem = document.createElement('li');
  const itensList = document.querySelectorAll('li');
  for (let index = 0; index < itensList.length; index += 1) {
    itensList[index].classList.remove('gray');
  }
  newItem.classList.add('gray');
  newItem.innerText = inputTask.value;
  orderedList.appendChild(newItem);
  inputTask.value = '';
})

orderedList.addEventListener('click', function (event) {
  const itensList = document.querySelectorAll('li');
  if (event.target != orderedList) {
    for (let index = 0; index < itensList.length; index += 1) {
      itensList[index].classList.remove('gray');
      itensList[index].classList.remove('selected');
    }
    event.target.classList.add('gray');
    event.target.classList.add('selected');
  }
})

orderedList.addEventListener('dblclick', function (event) {
  if (event.target != orderedList) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');;
    } else {
      event.target.classList.add('completed');
    }
  }
})

removeButton.addEventListener('click', function () {
  const itensList = document.querySelectorAll('li');
  for (let index = 0; index < itensList.length; index += 1) {
    itensList[index].remove();
  }
})

removeDoneTasksButton.addEventListener('click', function () {
  const doneTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < doneTasks.length; index += 1) {
    doneTasks[index].remove();
  }
})

saveTasksButton.addEventListener('click', function () {
  localStorage.setItem('lista', orderedList.innerHTML);
})

window.onload = function () {
  const savedList = localStorage.getItem('lista');
  orderedList = document.querySelector('#lista-tarefas');
  orderedList.innerHTML = savedList;
}
// Source: https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
moveUpButton.addEventListener('click', function () {
  let selected = document.querySelector('.selected');
  if(selected.previousElementSibling) {
    selected.parentElement.insertBefore(selected, selected.previousElementSibling);
  }
})

moveDownButton.addEventListener('click', function () {
  let selected = document.querySelector('.selected');
  if(selected.nextElementSibling) {
    selected.parentElement.insertBefore(selected.nextElementSibling, selected);
  }
})


selectedRemoveButton.addEventListener('click', function () {
  let selected = document.querySelector('.selected');
  selected.remove();
})