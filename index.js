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
    const [value, setValue] = React.useState('');

    const handleSubmit = e=> {
        //e.preventDefault();
        if (!value) return;
        const newTodos = [...todos, {text:value, isCompleted:false}];
        setTodos(newTodos);
        setValue('');
    }

    return (<>
        {todos.map((todo,i) => 
            <div className="todo" key={i}>{todo.text}</div>)} 
            
            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    className="input"
                    value={value}
                    placeholder="Add To list"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
            
            </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)