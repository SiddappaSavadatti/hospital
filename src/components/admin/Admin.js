import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import DoctorRegistration from './DoctorRegistration';
import Doctors from './Doctors';
import Patients from './Patients';
const admin = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'blue' : 'black',
          textDecoration: 'none',
          padding: '10px'
        };
      };
  return (
    <div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
                <NavLink to="doctorregistration" style={navLinkStyles}>
                    Doctor Registration
                </NavLink>
            </li>
            <li>
                <NavLink to="doctors" style={navLinkStyles}>
                    Doctors
                </NavLink>
            </li>
            <li>
                <NavLink to="patients" style={navLinkStyles}>
                Patients
                </NavLink>
            </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<DoctorRegistration/>}/> 
        <Route path="/doctors" element={<Doctors/>}/> 
        <Route path="/patients" element={<Patients/>}/> 

      </Routes>
    </div>
  )
}

export default admin
