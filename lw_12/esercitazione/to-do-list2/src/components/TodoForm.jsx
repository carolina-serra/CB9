import React, { useState } from 'react'; // Importa React e il hook useState

const TodoForm = ({ addTodo }) => { // Definisce il componente TodoForm
  const [value, setValue] = useState(''); // Stato per gestire il valore dell'input

  const handleSubmit = (e) => { // Funzione chiamata quando il modulo viene inviato
    e.preventDefault(); // Previene il comportamento predefinito di submit del form
    if (!value) return; // Se il valore dell'input è vuoto, non fare nulla
    addTodo(value); // Aggiunge il nuovo compito con il testo dell'input
    setValue(''); // Resetta l'input
  };

  return (
    <form onSubmit={handleSubmit}> {/* Gestisce l'evento di submit */}
      <input
        type="text" // Tipo di input testo
        value={value} // Valore dell'input collegato allo stato
        onChange={(e) => setValue(e.target.value)} // Aggiorna lo stato quando il testo dell'input cambia
        placeholder="Add a new task" // Testo segnaposto
      />
      <button type="submit">Add</button> {/* Bottone per aggiungere il compito */}
    </form>
  );
};

export default TodoForm; // Esporta il componente TodoForm
