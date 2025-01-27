import React from "react";
import { useLocalStorage } from '../TodoContext/useLocalStorage';
import { AppUI } from './AppUI';
import { TodoProvider } from "../TodoContext";

function App() {
  return(
    <TodoProvider>
    <AppUI
      /*loading={loading} 
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}   */
    />
    </TodoProvider>
  );
  }

export default App;
