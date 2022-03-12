import { ChangeEvent, useState } from 'react';

function TodoItem({
  content,
  isDone,
  onDone,
  onDelete,
  onEdit,
}: {
  content: string;
  isDone: boolean;
  onDone: (isDone: boolean) => void;
  onDelete: () => void;
  onEdit: (newTodo: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState(content);

  const randomId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) =>
    onDone(event.target.checked);

  const handleEdit = () => setIsEditing(true);

  const handleChangeTodo = (event: ChangeEvent<HTMLInputElement>) =>
    setTodo(event.target.value);

  const handleSave = () => {
    setIsEditing(false);
    onEdit(todo);
  };

  return (
    <tr>
      <td>
        {!isEditing && (
          <input
            checked={isDone}
            type="checkbox"
            id={randomId}
            onChange={handleCheck}
          />
        )}
      </td>
      <td>
        {isEditing ? (
          <input value={todo} type="text" onChange={handleChangeTodo} />
        ) : (
          <label htmlFor={randomId} role="button">
            {isDone ? (
              <s>
                <h3>{content}</h3>
              </s>
            ) : (
              <h3>{content}</h3>
            )}
          </label>
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>💾</button>
        ) : (
          <button onClick={handleEdit}>✏️</button>
        )}
      </td>
      <td>
        <button onClick={onDelete}>❌</button>
      </td>
    </tr>
  );
}

export default TodoItem;
