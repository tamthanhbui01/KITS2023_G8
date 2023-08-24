import { Table } from "antd";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/admin/adminApiRequest";
const User = () => {

const dispatch = useDispatch();
const token = localStorage.getItem("token");
const allUsers = useSelector((state) => state.admin.users?.allUsers);
const [isDataLoaded, setIsDataLoaded] = useState(false);

useEffect(() => {
  const fetchData = async () => {
    await getAllUsers(token, dispatch, "", "", 1, 100);
    setIsDataLoaded(true);
  };

  fetchData();
}, [isDataLoaded]);
if (!isDataLoaded) {
  return <div>Loading...</div>;
}

  const columns = [
    {
      title: "Account",
      dataIndex: "userAccount",
      key: "userAccount",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    
    {
      title: "Created at",
      dataIndex: "userCreatedAt",
      key: "userCreatedAt",
    },
    {
      title: "Updated at",
      dataIndex: "userUpdatedAt",
      key: "userUpdatedAt",
    },
    {
      title: "Status",
      dataIndex: "userStatus",
      key: "userStatus",
    },
  ];

  return (
    <div style={{ padding: "2%",textAlign:"center" }}>
      <div >
        <div style={{fontWeight: 700,fontSize:24}}>Users Management</div>
        <MyTable data={allUsers.users} columns={columns}/>
      </div>
    </div>
  );
}
export default User;


export const MyTable = ({ data, columns }) => {
  const dataSource = data.map(item => ({
    ...item,
    key: item.userID, // Use 'ID' field as the key
  }));

  return <Table dataSource={dataSource} columns={columns} scroll={{x:768}} style={{paddingTop:16}}/>;
};
