// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { SignUp } from './Components/Signinforms/Signup/SignUp';
import Signinforms from './Components/Signinforms/Signinforms';
import { Register } from './Components/Signinforms/regiter/Register';
import Sidebar from './Components/Dashboard/sidebar/SideBar';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>} />  
       <Route path="/signup" element={<SignUp/>} />  
       <Route path="/Register" element={<Register/>} />  
       <Route path="/signin" element={<Signinforms/>} />  
       <Route path="/sidebar" element={<Sidebar/>} />  
       
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
