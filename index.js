function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn React',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);
    
    // access the local state and update the list
    const addTodo = text => {        
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        //const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

    // return (
    // <>
    //     {todos.map((todo,i) => (
    //     <Todo index={i} key ={i} todo={todo} remove={removeTodo}/>))}

    //     <TodoForm addTodo={addTodo}/>
    // </>);
    
    return(
    <div className="app">
        <div className="todo-list" >
        {todos.map((todo, i) => (
            <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
        </div>
    </div>
    );

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)