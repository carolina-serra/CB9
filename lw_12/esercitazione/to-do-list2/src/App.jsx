import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() { // Definisce il componente principale App
  const [todos, setTodos] = useState([]); // Definisce lo stato dei compiti, inizialmente vuoto

  const addTodo = (text) => { // Funzione per aggiungere un nuovo compito
    const newTodo = { text, isCompleted: false }; // Crea un nuovo compito con testo e completato falso
    setTodos([...todos, newTodo]); // Aggiunge il nuovo compito alla lista dei compiti esistente
  };

  const toggleComplete = (index) => { // Funzione per cambiare lo stato di completamento di un compito
    const newTodos = [...todos]; // Crea una copia della lista dei compiti
    newTodos[index].isCompleted = !newTodos[index].isCompleted; // Inverte lo stato di completamento del compito
    setTodos(newTodos); // Aggiorna la lista dei compiti
  };

  const removeTodo = (index) => { // Funzione per rimuovere un compito
    const newTodos = [...todos]; // Crea una copia della lista dei compiti
    newTodos.splice(index, 1); // Rimuove il compito dall'indice specificato
    setTodos(newTodos); // Aggiorna la lista dei compiti
  };

  return (
    <div className = "App">
      <header className = "App-header">
        <h1>Todo List</h1> 
        <TodoForm addTodo = {addTodo} /> {/* Componente per il modulo di aggiunta dei compiti, passando la funzione addTodo */}
        <TodoList todos = {todos} toggleComplete = {toggleComplete} removeTodo = {removeTodo} /> {/* Componente per la lista dei compiti, passando i compiti e le funzioni di gestione */}
      </header>
    </div>
  );
}

export default App;
