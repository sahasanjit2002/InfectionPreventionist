import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NavbarSimple from './components/Navbar';
import Dashboard from './components/Dashboard';
import PatientData from './components/PatientData';
function App() {
  const[isLogin, setIsLogin] = useState(false);
  const[userName, setUserName] = useState("");
  console.log(userName)
  return (

    <>
    <NavbarSimple isLogin={isLogin} userName={userName}/>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login isLogin = {isLogin} setIsLogin={setIsLogin} setUserName={setUserName}/>} />
        <Route path='/register' element={<Register setIsLogin={setIsLogin} isLogin = {isLogin} setUserName={setUserName}/>} />
        {/* <Route path='/dashboard' element={<Dashboard/>} />  */}
        <Route path='/patientData' element={<PatientData/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
