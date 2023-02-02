import './App.css';
import Destination from './Pages/Destination';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Moon from './Components/Moon.jsx'
import Europa from './Components/Europa';
import Titan from './Components/Titan';
import Crew from './Pages/Crew';

function App() {
  return (
    <Router>
      <Routes >
         <Route exact path='/' element={< Home />}></Route>
         <Route exact path='/destination'element={<Destination />}></Route>
         <Route exact path='/moon'element={<Moon />}></Route>
         <Route exact path='/europa'element={<Europa />}></Route>
         <Route exact path='/titan'element={<Titan />}></Route>
         <Route exact path='/crew'element={<Crew />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
