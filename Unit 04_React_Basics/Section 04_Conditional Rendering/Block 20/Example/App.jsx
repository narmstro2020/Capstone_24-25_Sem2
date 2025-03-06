import Greeting from "./Greeting.jsx";
import AlertMessage from "./AlertMessage.jsx";
import TodoList from "./TodoList.jsx"

class Todo{
    constructor(id, text){
        this.id = id;
        this.text = text;
    }
}

const App = () => {
    let isLoggedIn = true;
    let showMessage = true;
    const todos = [
        new Todo(1, "Wash Clothes"),
        new Todo(2, "Do Dishes"),
        new Todo(3, "Clean House"),
        new Todo(4, "Help Win State"),
    ];
    return (
        <>
            <Greeting isLoggedIn={isLoggedIn}/>
            <AlertMessage showMessage={showMessage}/>
            <TodoList todos={todos}/>
        </>
    )
};

export default App
