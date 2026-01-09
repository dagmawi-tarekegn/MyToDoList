  let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
function addTodo() {
        const input = document.getElementById("Input");
        if (input.value.trim() === "") return;

        todos.push({ text: input.value, completed: false });
        input.value = "";
        saveTodos();
        //renderTodos();
    }
      function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        //renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        //renderTodos();
    }