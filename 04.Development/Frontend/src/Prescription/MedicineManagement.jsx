import { Table, Space } from "antd";
import React, { useState,useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
const MedicineManagement = () => {
  // const dispatch = useDispatch();
  // const id = localStorage.getItem("")
  // const token = localStorage.getItem("token");
  // const allPrescriptions = useSelector(state.prescription.prescriptions?.prescriptions);
  // const userProfile = useSelector(state => state.userProfile.singleUserProfile?.userProfile)
  // const [isDataLoaded, setIsDataLoaded] = useState(0);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await get
  //     await 
  //     setIsDataLoaded(isDataLoaded + +1);
  //   };

  //   fetchData();
  // }, [isDataLoaded]);
  // if (isDataLoaded != 2) {
  //   return <div>Loading...</div>;
  // }

  // const columns = [
  //   {
  //     title: "Account",
  //     dataIndex: "userAccount",
  //     key: "userAccount",
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "userEmail",
  //     key: "userEmail",
  //   },

  //   {
  //     title: "Created at",
  //     dataIndex: "userCreatedAt",
  //     key: "userCreatedAt",
  //   },
  //   {
  //     title: "Updated at",
  //     dataIndex: "userUpdatedAt",
  //     key: "userUpdatedAt",
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "userStatus",
  //     key: "userStatus",
  //   },
  // ];
  return (
    <div style={{ padding: "2%" }}>
      {/* <Space direction="vertical">
        <div style={{ fontWeight: 700, fontSize: 24 }}>Users Management</div>
        <MyTable data={allUsers.users} columns={columns} />
      </Space> */}
    </div>
  );
};

export default MedicineManagement;

export const MyTable = ({ data, columns }) => {
  const dataSource = data.map((item) => ({
    ...item,
    key: item.userID, // Use 'ID' field as the key
  }));

  return <Table dataSource={dataSource} columns={columns} />;
};
