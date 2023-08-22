// import React from "react";
// import { Table, Button, Modal, Form, Input, DatePicker } from "antd";
// import moment from "moment";

// class AppointmentManagement extends React.Component {
//   state = {
//     appointments: [],
//     isModalVisible: false,
//     newAppointment: {
//       name: "",
//       date: null,
//       description: "",
//       provider: "",
//       location: "",
//       purpose: "",
//       note: "",
//     },
//     editingAppointment: null,
//   };

//   columns = [
// {
//   title: "Tên cuộc hẹn",
//   dataIndex: "name",
// },
// {
//   title: "Ngày hẹn",
//   dataIndex: "date",
// },
// {
//   title: "Nhà cung cấp dịch vụ",
//   dataIndex: "provider",
// },
// {
//   title: "Địa điểm",
//   dataIndex: "location",
// },
// {
//   title: "Mục đích",
//   dataIndex: "purpose",
// },
// {
//   title: "Ghi chú",
//   dataIndex: "note",
// },
//     {
//       title: "Hành động",
//       dataIndex: "action",
//       render: (_, record) => (
//         <div>
//           <Button type="primary" onClick={() => this.editAppointment(record)}>
//             Sửa đổi
//           </Button>
//           <Button type="danger" onClick={() => this.cancelAppointment(record)}>
//             Hủy bỏ
//           </Button>
//         </div>
//       ),
//     },
//   ];

//   showModal = () => {
//     this.setState({ isModalVisible: true });
//   };

//   handleOk = () => {
//     const { newAppointment, editingAppointment } = this.state;

//     if (newAppointment.name && newAppointment.date) {
//       const appointment = {
//         ...newAppointment,
//         date: newAppointment.date.format("YYYY-MM-DD"),
//       };

//       if (editingAppointment) {
//         // Edit existing appointment
//         const updatedAppointments = this.state.appointments.map((item) => {
//           if (item === editingAppointment) {
//             return appointment;
//           }
//           return item;
//         });

//         this.setState({
//           appointments: updatedAppointments,
//           editingAppointment: null,
//         });
//       } else {
//         // Add new appointment
//         this.setState((prevState) => ({
//           appointments: [...prevState.appointments, appointment],
//         }));
//       }

//       this.setState({
//         isModalVisible: false,
//         newAppointment: {
//           name: "",
//           date: null,
//           description: "",
//           provider: "",
//           location: "",
//           purpose: "",
//           note: "",
//         },
//       });
//     }
//   };

//   handleCancel = () => {
//     this.setState({
//       isModalVisible: false,
//       newAppointment: {
//         name: "",
//         date: null,
//         description: "",
//         provider: "",
//         location: "",
//         purpose: "",
//         note: "",
//       },
//       editingAppointment: null,
//     });
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       newAppointment: {
//         ...prevState.newAppointment,
//         [name]: value,
//       },
//     }));
//   };

//   handleDateChange = (date) => {
//     this.setState((prevState) => ({
//       newAppointment: {
//         ...prevState.newAppointment,
//         date: date,
//       },
//     }));
//   };

//   editAppointment = (appointment) => {
//     this.setState({
//       isModalVisible: true,
//       newAppointment: {
//         name: appointment.name,
//         date: moment(appointment.date),
//         description: appointment.description,
//         provider: appointment.provider,
//         location: appointment.location,
//         purpose: appointment.purpose,
//         note: appointment.note,
//       },
//       editingAppointment: appointment,
//     });
//   };

//   cancelAppointment = (appointment) => {
//     this.setState((prevState) => ({
//       appointments: prevState.appointments.filter(
//         (item) => item !== appointment
//       ),
//     }));
//   };

//   render() {
//     const { appointments, isModalVisible, newAppointment } = this.state;

//     return (
//       <div>
//         <h2>Theo dõi cuộc hẹn y tế</h2>
//         <Button type="primary" onClick={this.showModal}>
//           Thêm cuộc hẹn
//         </Button>
//         <Table dataSource={appointments} columns={this.columns} />

//         <Modal
//           title="Thêm cuộc hẹn"
//           visible={isModalVisible}
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//         >
//           <Form>
//             <Form.Item label="Tên cuộc hẹn">
//               <Input
//                 name="name"
//                 value={newAppointment.name}
//                 onChange={this.handleInputChange}
//               />
//             </Form.Item>
//             <Form.Item label="Ngày hẹn">
//               <DatePicker
//                 value={newAppointment.date}
//                 onChange={this.handleDateChange}
//               />
//             </Form.Item>
// <Form.Item label="Mô tả">
//   <Input
//     name="description"
//     value={newAppointment.description}
//     onChange={this.handleInputChange}
//   />
// </Form.Item>
// <Form.Item label="Nhà cung cấp dịch vụ">
//   <Input
//     name="provider"
//     value={newAppointment.provider}
//     onChange={this.handleInputChange}
//   />
// </Form.Item>
// <Form.Item label="Địa điểm">
//   <Input
//     name="location"
//     value={newAppointment.location}
//     onChange={this.handleInputChange}
//   />
// </Form.Item>
// <Form.Item label="Mục đích">
//   <Input
//     name="purpose"
//     value={newAppointment.purpose}
//     onChange={this.handleInputChange}
//   />
// </Form.Item>
// <Form.Item label="Ghi chú">
//   <Input
//     name="note"
//     value={newAppointment.note}
//     onChange={this.handleInputChange}
//   />
// </Form.Item>
//           </Form>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default AppointmentManagement;
import React from "react";
import { Table, Button, Modal, Form, Input, DatePicker } from "antd";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AppointmentManagement extends React.Component {
  state = {
    appointments: [],
    isModalVisible: false,
    newAppointment: {
      name: "",
      date: null,
      description: "",
      provider: "",
      location: "",
      purpose: "",
      note: "",
    },
    editingAppointment: null,
  };

  columns = [
    {
      title: "Tên cuộc hẹn",
      dataIndex: "name",
    },
    {
      title: "Ngày hẹn",
      dataIndex: "date",
    },
    {
      title: "Nhà cung cấp dịch vụ",
      dataIndex: "provider",
    },
    {
      title: "Địa điểm",
      dataIndex: "location",
    },
    {
      title: "Mục đích",
      dataIndex: "purpose",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: (_, record) => (
        <div>
          <Button type="primary" onClick={() => this.editAppointment(record)}>
            Sửa đổi
          </Button>
          <Button type="danger" onClick={() => this.cancelAppointment(record)}>
            Hủy bỏ
          </Button>
        </div>
      ),
    },
  ];

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    const { newAppointment, editingAppointment } = this.state;

    if (newAppointment.name && newAppointment.date) {
      const appointment = {
        ...newAppointment,
        date: newAppointment.date.format("YYYY-MM-DD"),
      };

      if (editingAppointment) {
        // Edit existing appointment
        const updatedAppointments = this.state.appointments.map((item) => {
          if (item === editingAppointment) {
            return appointment;
          }
          return item;
        });

        this.setState(
          {
            appointments: updatedAppointments,
            editingAppointment: null,
          },
          () => {
            toast.success("Lịch hẹn đã được cập nhật.");
          }
        );
      } else {
        // Add new appointment
        this.setState(
          (prevState) => ({
            appointments: [...prevState.appointments, appointment],
          }),
          () => {
            toast.success("Lịch hẹn đã được thêm mới.");
          }
        );
      }

      this.setState({
        isModalVisible: false,
        newAppointment: {
          name: "",
          date: null,
          description: "",
          provider: "",
          location: "",
          purpose: "",
          note: "",
        },
      });
    } else {
      toast.error("Vui lòng nhập tên cuộc hẹn và ngày hẹn.");
    }
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
      newAppointment: {
        name: "",
        date: null,
        description: "",
        provider: "",
        location: "",
        purpose: "",
        note: "",
      },
      editingAppointment: null,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newAppointment: {
        ...prevState.newAppointment,
        [name]: value,
      },
    }));
  };

  handleDateChange = (date) => {
    this.setState((prevState) => ({
      newAppointment: {
        ...prevState.newAppointment,
        date: date,
      },
    }));
  };

  editAppointment = (appointment) => {
    this.setState({
      isModalVisible: true,
      newAppointment: {
        name: appointment.name,
        date: moment(appointment.date),
        description: appointment.description,
        provider: appointment.provider,
        location: appointment.location,
        purpose: appointment.purpose,
        note: appointment.note,
      },
      editingAppointment: appointment,
    });
  };

  cancelAppointment = (appointment) => {
    this.setState((prevState) => ({
      appointments: prevState.appointments.filter(
        (item) => item !== appointment
      ),
    }));
  };

  render() {
    const { appointments, isModalVisible, newAppointment } = this.state;

    return (
      <div>
        <h2>Theo dõi cuộc hẹn y tế</h2>
        <Button type="primary" onClick={this.showModal}>
          Thêm cuộc hẹn
        </Button>
        <Table dataSource={appointments} columns={this.columns} />

        <Modal
          title="Thêm cuộc hẹn"
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item label="Tên cuộc hẹn">
              <Input
                name="name"
                onChange={this.handleInputChange}
                value={newAppointment.name}
              />
            </Form.Item>
            <Form.Item label="Ngày hẹn">
              <DatePicker
                onChange={this.handleDateChange}
                value={newAppointment.date}
                format="DD/MM/YYYY"
              />
            </Form.Item>
            <Form.Item label="Mô tả">
              <Input
                name="description"
                value={newAppointment.description}
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Nhà cung cấp dịch vụ">
              <Input
                name="provider"
                value={newAppointment.provider}
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Địa điểm">
              <Input
                name="location"
                value={newAppointment.location}
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Mục đích">
              <Input
                name="purpose"
                value={newAppointment.purpose}
                onChange={this.handleInputChange}
              />
            </Form.Item>
            <Form.Item label="Ghi chú">
              <Input
                name="note"
                value={newAppointment.note}
                onChange={this.handleInputChange}
              />
            </Form.Item>
          </Form>
        </Modal>

        <ToastContainer />
      </div>
    );
  }
}

export default AppointmentManagement;
