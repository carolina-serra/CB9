import React from 'react'; // Importa React
import TodoItem from './TodoItem'; // Importa il componente TodoItem

const TodoList = ({ todos, toggleComplete, removeTodo }) => { // Definisce il componente TodoList
  return (
    <ul> {/* Lista non ordinata */}
      {todos.map((todo, index) => ( // Mappa attraverso la lista dei compiti e crea un TodoItem per ciascuno
        <TodoItem
          key={index} // Chiave unica per ogni elemento della lista
          index={index} // Indice del compito
          todo={todo} // Dati del compito
          toggleComplete={toggleComplete} // Funzione per cambiare lo stato di completamento
          removeTodo={removeTodo} // Funzione per rimuovere il compito
        />
      ))}
    </ul>
  );
};

export default TodoList; // Esporta il componente TodoList
