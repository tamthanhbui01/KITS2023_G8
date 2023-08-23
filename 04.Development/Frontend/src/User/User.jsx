import { Pagination, Space, Table } from "antd";
const { showQuickJumper } = Pagination;
function User() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div style={{ padding: "2%" }}>
      <Space direction="vertical">
        <div>Users List</div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            // total: 50,
          }}
        />
      </Space>
    </div>
  );
}
export default User;
