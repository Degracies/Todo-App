// const notesE1 = document.querySelector(".notes");
// const editBtn = document.querySelector(".edit");
// const deleteBtn = document.querySelector(".delete");

// const main = notesE1.querySelector('.main');
// const textArea = notesE1.querySelector("textarea");

// editBtn.addEventListener("click", () => {
//     main.classList.toggle("hidden");
//     textArea.classList.toggle("hidden");
// });

// textArea.addEventListener("input",(e) => {
//     const {value} = e.target;
//     main.innerHTML = marked(value);
// });

/* <div class="notes">
        <div class="tools">
         <button class="edit"> <i class="fas fa-edit"></i></button>
         <button class="delete"> <i class="fas fa-trash-alt"></i></button>  
        </div> 
        <div class="main hidden">
        <textarea>buhy</textarea>
    </div>
    </div> */


    const input = document.getElementById("input");
    const todosUl = document.getElementById("todos");
    const date = document.getElementById("date");
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos) {
        todos.forEach(todo => addTodo(todo))
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        addTodo()
    } )

    function addTodo(todo){
        let todoText = input.value

        if(todo) {
            todoText = todo.text
        }
        
        if(todoText) {
            const todoEl = document.createElement('li')
            if (todo && todo.completed) {
                todoEl.classList.add('completed')
            }

            todoEl.innerText = todoText

            
            todoEl.addEventListener("click", () => {
                todoEl.classList.toggle("completed")
                update()
            })

            todoEl.addEventListener("contextmenu", (e) => {
                e.preventDefault()

                todoEl.remove()
                update()
            })

            todosUl.appendChild(todoEl)
            input.value = ''
            
            update()

        }   if(input.value = ''){
            addEventListener("onClick", () => {
                todoText.innerText = new Date();
            }) 
            
        }
        
    }


    function update() {
        todoEl  = document.querySelectorAll('li')

        const todos = []

        todoEl.forEach(todoEl => {
            todos.push({ 
                text: todoEl.innerText,
                completed:  todoEl.classList.contains('completed') 
        })
        }) 

        localStorage.setItem('todos', JSON.stringify(todos))
    }