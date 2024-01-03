import { useContext} from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { createContext } from 'vm';
import TodosContextProvider from './store/todos-context';

function App() {

  return (
  <TodosContextProvider>
    <NewTodo />
    <Todos/>
  </TodosContextProvider>
  );
}

export default App;
