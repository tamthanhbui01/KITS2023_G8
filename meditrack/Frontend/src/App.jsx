import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import DLogin from "./Dashboard-Login/DLogin";
import Admin from "./Admin/Admin";
import DRegister from "./Dashboard-Login/DRegister";
import { useEffect } from "react";
import Dashboard from "./Dashboard-User/Dashboard"
import User from "./User/User";

import HealthCalendar from "./HealthCalendar/HealthCalendar";
import AdminDashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import MedicineManagement from "./Prescription/MedicineManagement";
import AppointmentManagement from "./Appointment/AppointmentManagement";
import HealthRecordManagement from "./HealthRecordManagement/HealthRecordManagement";
import HealthCareProviders from "./HealthCareProviders/HealthcareProviders";
import ProfilePage from "./profile";
import Reminder from "./Reminder/Reminder";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const location = useLocation();

  useEffect(() => {
    if (
      token === null &&
      (location.pathname !== "/register" || location.pathname !== "/login")
    ) {
      navigate("/login");
    }
    if (
      token !== null &&
      (location.pathname === "/register" || location.pathname === "/login")
        ) {if(id==1)
          {
            navigate("/admin");
          } 
          else navigate("")
    }
  }, []);

  return (
    <>
      {token === null ? (
        <Routes>
          <Route path="/login" element={<DLogin />}></Route>
          <Route path="/register" element={<DRegister />} />
        </Routes>
      ) : id == 1 ? (
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminDashboard />} />
            <Route path="user" element={<User />}></Route>
            <Route path="claim" element={<>Hello</>}></Route>
            <Route path="calendar" element={<HealthCalendar />}></Route>
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard/>}>
          <Route index element={<Home/>} ></Route>
          <Route path="medicine" element={<MedicineManagement/>}></Route>
          <Route path="appointments" element={<AppointmentManagement/>}></Route>
          <Route path="health" element={<HealthRecordManagement/>}></Route>
          <Route path="providers" element={<HealthCareProviders/>}></Route>
          <Route path="reminders" element={<Reminder/>} ></Route>
          <Route path="profile" element={<ProfilePage/>}></Route>
          </Route>

            
        </Routes>
      )}
    </>
  );
}

export default App;
