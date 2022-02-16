const addTaskButton = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');

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
  const itensList = document.querySelectorAll('li');
  if (event.target != orderedList) {
    if (event.target.className != 'completed') {
      event.target.className = 'completed';
    } else {
      event.target.className = 'itens-list';
    }
  }
})