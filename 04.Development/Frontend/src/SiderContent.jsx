
import {
  Menu,
} from "antd";
import { useState } from "react";

import { Link } from "react-router-dom";
import { GiHealthCapsule } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";

import { BsPeopleFill } from "react-icons/bs";


function SiderContent({collapsed}){
    
    return(
        <>
            <div className="logo-wrap" style={{ height: 64, justifyContent:"center", display:"flex", alignItems:"center", backgroundColor:"#005298 "}}>
          <GiHealthCapsule fontSize={32} color="white" />
          {!collapsed ? (
            <span style={{ fontSize: 24, color: "white", padding:20 }}>MediTrack</span>
          ) : 
            ""
          }
        </div>
        <Menu style={{}}
          defaultSelectedKeys={["1"]}
          items={[
            
            {
              label: <Link to="/">Dashboard</Link>,
              icon: <RxDashboard />,
              key: "1",
            },
            {
              label: <Link to="/users">Users</Link>,
              key: "5",
              icon: <BsPeopleFill />,
            },
            {
              label: <Link to="/appointments">Appointments</Link>,
              key: "2",
              icon: <GrSchedules />,
            },
            {
              label: <Link to="">Doctors</Link>,
              key: "3",
              icon: <FaUserDoctor />,
            },
            {
              label: <Link to="">Departments</Link>,
              key: "4",
              icon: <FaHouseUser />,
            },

            {
              label: <Link to="">Payments</Link>,
              key: "6",
              icon: <BsPeopleFill />,
            },
          ]}
        ></Menu>
        </>
    )
}
 export default SiderContent