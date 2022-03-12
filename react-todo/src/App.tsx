import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState<{ todo: string; isDone: boolean }[]>([]);

  const handleSaveTodo = (todo: string) => {
    setTodos([...todos, { todo, isDone: false }]);
  };

  const handleMarkDone = (index: number, isDone: boolean) => {
    const newTodos = [...todos];
    newTodos[index].isDone = isDone;
    setTodos(newTodos);
  };

  const handleEdit = (index: number, newTodo: string) => {
    const newTodos = [...todos];
    newTodos[index].todo = newTodo;
    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>React Todo</h1>
      <br />
      <TodoInput onSave={handleSaveTodo} />
      <br />
      <br />
      <table>
        <tbody>
          {todos.map(({ todo, isDone }, i) => (
            <TodoItem
              key={`todo-${i}`}
              content={todo}
              isDone={isDone}
              onDone={(isDone) => handleMarkDone(i, isDone)}
              onEdit={(newTodo) => handleEdit(i, newTodo)}
              onDelete={() => handleDelete(i)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
