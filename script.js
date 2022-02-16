const addTaskButton = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');

addTaskButton.addEventListener('click', function () {
  let newItem = document.createElement('li');
  const itensList = document.querySelectorAll('.itens-list');
  for (let index = 0; index < itensList.length; index += 1) {
    itensList[index].className = 'itens-list';
  }
  newItem.className = 'itens-list gray';
  newItem.innerText = inputTask.value;
  orderedList.appendChild(newItem);
  inputTask.value = '';
})

orderedList.addEventListener('click', function (event) {
  const itensList = document.querySelectorAll('.itens-list');
  if (event.target != orderedList) {
    for (let index = 0; index < itensList.length; index += 1) {
      itensList[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
})