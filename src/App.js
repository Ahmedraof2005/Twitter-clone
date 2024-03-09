import './App.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { BrowserRouter , Route ,Routes , Link } from 'react-router-dom';


function App() {
  return (
    <div className="app">

        <BrowserRouter>

        <Link to='/' />
        <Link to='/Signup' />
        <Link to='/home' />


        <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
          
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
