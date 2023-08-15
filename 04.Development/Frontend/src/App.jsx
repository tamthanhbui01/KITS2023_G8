const {Sider,Header, Footer, Content} = Layout
import {Layout, Menu,Input,Button,Space} from "antd"
const {Search}=Input;
import './App.css'
import {Link } from "react-router-dom";
import {GiHealthCapsule} from "react-icons/gi";
import {RxDashboard} from "react-icons/rx";
import {GrSchedules} from "react-icons/gr";
import {FaUserDoctor} from "react-icons/fa6"
import {FaHouseUser} from "react-icons/fa"
import {HiMenu} from "react-icons/hi"
import { useState } from "react";
import {BsPeopleFill} from "react-icons/bs"
function App() {
  const [collapsed,handleCollapsed]=useState(false)

  return (
    <Layout style={{minHeight:"100vh"}}>
      <Sider style={{backgroundColor:"gray"}} 
             width={240} 
             collapsed={collapsed} >
        <div className="logo-wrap" style={{height:64}}>
          <GiHealthCapsule fontSize={32}/>
          {!collapsed? (<span style={{fontSize:24}}>MediTrack</span>):<></>}
        </div>
        <Menu defaultSelectedKeys={1} items={[
          {
            label:(
              <Link to="">Dashboard</Link>
          ),
          icon:<RxDashboard/>,
          key:"1",

          },
          {
            label:(
              <Link to="">Appointments</Link>
          ),
          key:"2",
          icon:<GrSchedules/>,

          },
          {
            label:(
              <Link to="">Doctors</Link>
          ),
          key:"3",
          icon:<FaUserDoctor/>

          },
          {
            label:(
              <Link to="">Departments</Link>
          ),
          key:"4",
          icon:<FaHouseUser/>
          },
          {
            label:(
              <Link to="">Patients</Link>
          ),
          key:"5",
          icon:<BsPeopleFill/>

          },
          {
            label:(
              <Link to="">Payments</Link>
          ),
          key:"6",
          icon:<BsPeopleFill/>
          },
        ]}>
          
        </Menu>
      </Sider>
      <Layout>
        <Header style={{backgroundColor:"orange"}}>
          <Button icon={<HiMenu />} size="large" onClick={()=>{handleCollapsed(!collapsed)}}></Button>
          <Search placeholder="Search" size="large" style={{width:360}}/>  
          
        </Header>
        <Content style={{backgroundColor:"green"}}>
asdasd
        </Content>
        <Footer style={{backgroundColor:""}}>
          <div>copyright by meditrack</div>
        </Footer >  
      </Layout>
    </Layout>
  )
}

export default App
