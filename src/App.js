import './App.css';
import Add from './Components/Add/Add';
import Header from './Components/Header/Header';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Structure from './Components/Structure/Structure';

function App() {
  return (
    <div className="To-Dos-App">
     <Header/>
      <Routes>
        <Route path='/' element={<Structure/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
