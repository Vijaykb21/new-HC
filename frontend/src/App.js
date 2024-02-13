// import './App.css';
import {Route,Router, Routes} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    

    // <Router>
    <>
    <Routes>
    
    <Route path="/home" element= {<Home/>}/>;
    <Route path="/login" element= {<Login/>}/>;
    <Route path="/" element= {<Register/>}/>;
    
    </Routes>
    <Toaster/>
    {/* </Router> */}
    </>
    
   
  );

}

export default App;
