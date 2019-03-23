//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('clear-tasks');
const filter = document.querySelector('filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners function
function loadEventListeners(){
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task Events
  taskList.addEventListener('click', removeTask);
}

//Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Please add task');
  } 

    //create li element
    const li = document.createElement('li');
    // Add class to li
    li.className = 'collection-item';
    //create a textnode
    li.appendChild(document.createTextNode(taskInput.value));
    //Create a new link element
    const link = document.createElement('a');
    //add Class
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to UI
    taskList.appendChild(li);
    //clear input
    taskInput.value ='';
    e.preventDefault();
  
}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
      e.target.parentElement.parentElement.remove();
    }
  }
  e.preventDefault();
}