//UI var declaration

const task = document.querySelector('#task');

const collection = document.querySelector('.collection');

const form = document.getElementById('task-form');


//Call event listerners function
loadEventListeners();


//Load all event listerners
function loadEventListeners() {
  form.addEventListener('submit', addtask);
  
}

//add task to ul
function addtask(e){
  if(task.value ===''){
    alert('Please enter a task');
  }
  const li = document.createElement('li');
  const liText = document.createTextNode(task.value);
  li.appendChild(liText);
  const attachLink = document.createElement('a');
  attachLink.className = 'link';
  attachLink.innerHTML = '<i class="fa fa-trash"></i>';
  li.appendChild(attachLink);
  collection.appendChild(li);
  console.log(task.value);
  task.value = '';
    
  e.preventDefault();
}