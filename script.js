const addTaskButton = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
addTaskButton.addEventListener('click', function () {
  let newItem = document.createElement('li');
  newItem.innerText = inputTask.value;
  orderedList.appendChild(newItem);
  inputTask.value = '';
})