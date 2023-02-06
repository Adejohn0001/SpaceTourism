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
import Technology from './Pages/Technology';
import Capsule from './Components/Capsule';
import Spacesport from './Components/Spacesport';

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
         <Route exact path='/technology'element={<Technology />}></Route>
         <Route exact path='/space-capsule'element={<Capsule />}></Route>
         <Route exact path='/spaceport'element={<Spacesport />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
