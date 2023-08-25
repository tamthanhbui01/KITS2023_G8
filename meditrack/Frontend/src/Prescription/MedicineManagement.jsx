import { Table, Space } from "antd";
import React, { useState,useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllPrescriptions } from "../redux/prescription/prescriptionApiRequest";
const MedicineManagement = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const upID = localStorage.getItem("upID")
  const allPrescriptions = useSelector(state => state.prescription.prescriptions?.prescriptions);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await getAllPrescriptions(token, dispatch, upID, 1, 100)
      await 
      setIsDataLoaded(true);
    };

    fetchData();
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return <div>Loading...</div>;
  }
  console.log(allPrescriptions)
  const columns = [
    {
      title: "Medicine",
      dataIndex: "preMedicine",
      key: "preMedicine",
    },
    {
      title: "Dosage (per day)",
      dataIndex: "preDosage",
      key: "preDosage",
    },

    {
      title: "Duration",
      dataIndex: "preDuration",
      key: "preDuration",
    },
    {
      title: "Doctor",
      dataIndex: "preDoctor",
      key: "preDoctor",
    },
    {
      title: "Notes",
      dataIndex: "preNotes",
      key: "preNotes",
    },
  ];
  return (
    <div style={{ padding: "2%" }}>
      <Space direction="vertical">
        <div style={{ fontWeight: 700, fontSize: 24 }}>Prescription</div>
        <MyTable data={allPrescriptions.data} columns={columns} />
      </Space>
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
