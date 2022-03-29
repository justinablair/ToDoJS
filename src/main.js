import "babel-polyfill";
const todoSection = document.querySelector('#todos');
const todoTemplate = document.querySelector('#todo-template');



  document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
      alert("Please enter a task")
  }

  else{
      document.querySelector('#tasks').innerHTML += `
          <div class="task"
              <span id="taskname" >
                  ${document.querySelector('#newtask input').value}
              </span>
             
              <button class="delete">
                 x
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
      
      
  }
}


getData()
  .catch(err => console.error(err));

async function getData() {
  const todoData = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
  const todos = await todoData.json();
  let i = 0;

  // throw 'Get Data Error';
  // console.log(todos);

  todos.forEach(todo => {
    i++;
    if(i < 10) {
      const title = todo.title;
      const completed = todo.completed;
      
      // document.querySelector('#push').onclick = function(){
      //   if(document.querySelector(‘#tasks).value.length == 1){
      //    let el = document.querySelector('.target');
      //   el.style.setProperty('text-decoration', 'line-through');
        
      
        

      fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(res => res.text())
        .then(res => {
          const newTodo = document.importNode(todoTemplate.content, true);
          const todoTitle = newTodo.querySelector('.todo__title');
          const todoCompleted = newTodo.querySelector('.todo__completed');
          
          todoTitle.innerText = title;
          todoCompleted.innerText = completed;
          todoSection.appendChild(newTodo);
        })
        .catch(err => console.error(err));
    }
  })
}

