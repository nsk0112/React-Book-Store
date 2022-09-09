import { useContext } from 'react';
import './App.css';
import Home from './components/Home';
// import {dataContext, dataContextProvider} from './Context';

function App() {

  const { data } = useContext(dataContext);

  return (
      <div className="App">
        <Home />
      </div>
  );
}

export default App;
