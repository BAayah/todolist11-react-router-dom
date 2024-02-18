import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Todos } from './Pages/Todos';
import { Home } from './Pages/Home';
import { Login } from './Pages/Authorization';


function App() {  

  return (
    <Router>
      <Routes>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
