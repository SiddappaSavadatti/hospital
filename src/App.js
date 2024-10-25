import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Admin from './components/admin/Admin';
import Doctor from './components/doctor/Doctor';
import Patient from './components/patient/Patient';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/patient" element={<Patient/>}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
