import Greeting from "./Greeting.jsx";
import AlertMessage from "./AlertMessage.jsx";
import TodoList from "./TodoList.jsx"

const App = () => {
    let isLoggedIn = true;
    let showMessage = true;
    const todos = [
        "Wash Clothes",
        "Do Dishes",
        "Clean House",
        "Help Team win State"
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
