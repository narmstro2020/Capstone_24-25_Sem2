import TodoList from "./TodoList.jsx";

class Todo {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}

const App = () => {

    const todos = [
        new Todo(1, "Wash Dishes"),
        new Todo(2, "Clean House")
    ];

    return (
        <>
            <TodoList todos={todos}/>
        </>
    )
}

export default App
