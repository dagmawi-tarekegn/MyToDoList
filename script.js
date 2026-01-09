  let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
