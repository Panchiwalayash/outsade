import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import  Home  from './components/home/Home';
import Register from './components/register/Register';
import Login  from './components/login/Login';
import Navbar from './components/navbar/Navbar'

function App() {
  const user=localStorage.getItem("user")
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={ user?<Home/>:<Login/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
