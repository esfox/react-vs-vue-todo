import { ChangeEvent, useState } from 'react';

function TodoInput({ onSave }: { onSave: (todo: string) => void }) {
  const [todo, setTodo] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSave = () => {
    if (!todo) return;
    setTodo('');
    onSave(todo);
  };

  return (
    <>
      <input value={todo} type="text" onChange={handleInput} />
      <button onClick={handleSave}>Save</button>
    </>
  );
}

export default TodoInput;
