import React from 'react'; // Importa React

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => { // Definisce il componente TodoItem
  return (
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}> {/* Stile per la riga del compito, con linea attraverso se completato */}
      {todo.text} {/* Testo del compito */}
      <div>
        <button onClick={() => toggleComplete(index)}>Complete</button> {/* Bottone per completare il compito */}
        <button onClick={() => removeTodo(index)}>Delete</button> {/* Bottone per eliminare il compito */}
      </div>
    </li>
  );
};

export default TodoItem; // Esporta il componente TodoItem
