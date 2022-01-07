import {  useState } from 'react';
import './App.css';
import { TodoContainer } from './components/TodoContainer';
import { TodoHeader } from './components/TodoHeader';

const initialItems = JSON.parse(localStorage.getItem('items')) || [];

const App = ()=>{

  const [items,setItems] = useState(initialItems);

  return (
    <div className="App">
      <div className="app_container">

        <TodoHeader items={items} setItems={setItems} />

        <TodoContainer items={items} setItems={setItems}/>

      </div>

    </div>
  );
}

export default App;
