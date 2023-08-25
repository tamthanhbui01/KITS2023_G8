import { Menu } from "antd";
import { Link } from "react-router-dom";
import { GiHealthCapsule } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { FaHouseUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
function SiderContent({ collapsed }) {
  return (
    <>
      <div
        className="logo-wrap"
        style={{
          height: 64,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#005298 ",
        }}
      >
        <GiHealthCapsule fontSize={32} color="white" />
        {!collapsed ? (
          <span style={{ fontSize: 24, color: "white", padding: 20 }}>
            MediTrack
          </span>
        ) : (
          ""
        )}
      </div>
      <Menu
        items={[
          {
            label: <Link to="/admin">Dashboard</Link>,
            icon: <RxDashboard />,
            key: "1",
          },
          {
            label: <Link to="user">User</Link>,
            key: "2",
            icon: <BsPeopleFill />,
          },
          
          {
            label: <Link to="claim">Claim</Link>,
            key: "3",
            icon: <FaHouseUser />,
          },
        ]}
      ></Menu>
    </>
  );
}
export default SiderContent;
