var inputTask = document.getElementById('input-task');
var submitTask = document.getElementById('submit-task');
var todoList = document.getElementById('todo-list');

// 2. store a few tasks/items to do


// 3. load up todo list with items stored


// 1. When i click on the Add button, add the task to the interface

submitTask.addEventListener('click', function() {

  var newTask = inputTask.value;
  todoList.innerHTML += `<li class="task"><a href="#">${newTask}</a></li>`;

})

// 4. When i click a task, mark it as complete or not-complete





// Plugins:
// Can we sort this list?
// Can we alert the user in case of errors?
// Can items be more complex (objects)?
// Local storage
// on Enter add item
