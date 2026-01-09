  let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }


function renderTodos() {
    const list = document.getElementById("myList");
    list.innerHTML = "";

        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = todo.completed ? "completed" : "";

            const span = document.createElement("span");
            span.textContent = todo.text;
            span.onclick = () => toggleComplete(index);

            const del = document.createElement("span");
            del.textContent = "DELETE";
            del.className = "delete";
            del.onclick = () => deleteTodo(index);

            li.appendChild(span);
            li.appendChild(del);
            list.appendChild(li);
        });
    }

function addTodo() {
        const input = document.getElementById("Input");
        if (input.value.trim() === "") return;

        todos.push({ text: input.value, completed: false });
        input.value = "";
        saveTodos();
        renderTodos();
    }
      function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
         renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }

    renderTodos();

