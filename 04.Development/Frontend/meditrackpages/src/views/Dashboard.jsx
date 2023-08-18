/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";

import PageTitle from "../components/common/PageTitle";

const Dashboard = () => {
  const data = [
    {
      key: "1",
      PID: "1",
      Name: "Ronnie",
      Sex: "Male",
      Category: "Cardiologist",
      Description: "Experienced a catastrophic heart attack 5 mins ago",
      "Time Log": "21:30 Hours",
      "Prev History": "Yes",
    },
    // Add more data rows here...
  ];

  const columns = [
    {
      title: "PID",
      dataIndex: "PID",
      key: "PID",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Sex",
      dataIndex: "Sex",
      key: "Sex",
    },
    {
      title: "Category",
      dataIndex: "Category",
      key: "Category",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Time Log",
      dataIndex: "Time Log",
      key: "Time Log",
    },
    {
      title: "Prev History",
      dataIndex: "Prev History",
      key: "Prev History",
    },
    {
      title: "Action",
      key: "Action",
      render: (text, record) => (
        <Button
          tag={Link}
          to="mypatients"
          outline
          theme="success"
          className="mb-2 mr-1"
        >
          Accept
        </Button>
      ),
    },
  ];

  return (
    <div className="main-content-container px-4">
      {/* Page Header */}
      <div className="page-header py-4">
        <PageTitle
          sm="4"
          title="Live Cases"
          subtitle="Cases Now"
          className="text-sm-left"
        />
      </div>

      {/* Default Light Table */}
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Dashboard;
