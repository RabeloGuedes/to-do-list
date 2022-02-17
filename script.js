const addTaskButton = document.querySelector('#criar-tarefa');
let orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const removeButton = document.querySelector('#apaga-tudo');
const removeDoneTasksButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');

addTaskButton.addEventListener('click', function () {
  let newItem = document.createElement('li');
  const itensList = document.querySelectorAll('li');
  for (let index = 0; index < itensList.length; index += 1) {
    itensList[index].style.backgroundColor = 'white';
  }
  newItem.style.backgroundColor = 'rgb(128, 128, 128)';
  newItem.innerText = inputTask.value;
  orderedList.appendChild(newItem);
  inputTask.value = '';
})

orderedList.addEventListener('click', function (event) {
  const itensList = document.querySelectorAll('li');
  if (event.target != orderedList) {
    for (let index = 0; index < itensList.length; index += 1) {
      itensList[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
})

orderedList.addEventListener('dblclick', function (event) {
  if (event.target != orderedList) {
    if (event.target.className != 'completed') {
      event.target.className = 'completed';
    } else {
      event.target.className = 'itens-list';
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