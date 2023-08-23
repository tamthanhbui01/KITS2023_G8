import React from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";

class MedicineManagement extends React.Component {
  state = {
    medicines: [],
    isModalVisible: false,
    newMedicine: {
      name: "",
      dosage: "",
      frequency: "",
      prescribedBy: "",
    },
    isEditing: false,
    editMedicineIndex: null,
    medicationHistory: [], // Lịch sử dùng thuốc
    manualLog: "", // Nhật ký thủ công
  };

  columns = [
    {
      title: "Tên thuốc",
      dataIndex: "name",
    },
    {
      title: "Liều lượng",
      dataIndex: "dosage",
    },
    {
      title: "Tần suất",
      dataIndex: "frequency",
    },
    {
      title: "Bác sĩ kê đơn",
      dataIndex: "prescribedBy",
    },
    {
      title: "Hành động",
      render: (_, record, index) => (
        <Button onClick={() => this.editMedicine(index)}>Sửa</Button>
      ),
    },
  ];

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    const { newMedicine, isEditing, editMedicineIndex } = this.state;

    if (newMedicine.name) {
      const medicine = { ...newMedicine };

      this.setState((prevState) => {
        let updatedMedicines = [...prevState.medicines];

        if (isEditing && editMedicineIndex !== null) {
          updatedMedicines[editMedicineIndex] = medicine;
        } else {
          updatedMedicines = [...prevState.medicines, medicine];
        }

        return {
          medicines: updatedMedicines,
          isModalVisible: false,
          newMedicine: {
            name: "",
            dosage: "",
            frequency: "",
            prescribedBy: "",
          },
          isEditing: false,
          editMedicineIndex: null,
        };
      });
    }
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
      newMedicine: {
        name: "",
        dosage: "",
        frequency: "",
        prescribedBy: "",
      },
      isEditing: false,
      editMedicineIndex: null,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newMedicine: {
        ...prevState.newMedicine,
        [name]: value,
      },
    }));
  };

  editMedicine = (index) => {
    const { medicines } = this.state;
    const medicineToEdit = medicines[index];

    this.setState({
      newMedicine: {
        name: medicineToEdit.name,
        dosage: medicineToEdit.dosage,
        frequency: medicineToEdit.frequency,
        prescribedBy: medicineToEdit.prescribedBy,
      },
      isEditing: true,
      editMedicineIndex: index,
      isModalVisible: true,
    });
  };

  markMedicationCompleted = (medicine) => {
    const { medicationHistory } = this.state;

    // Kiểm tra xem đã có trong lịch sử dùng thuốc chưa
    const isMedicineCompleted = medicationHistory.find(
      (item) => item.name === medicine.name
    );

    if (isMedicineCompleted) {
      message.warning("Thuốc đã được đánh dấu hoàn thành trước đó.");
    } else {
      this.setState((prevState) => ({
        medicationHistory: [
          ...prevState.medicationHistory,
          { ...medicine, status: "Hoàn thành" },
        ],
      }));
      message.success("Đã đánh dấu thuốc hoàn thành.");
    }
  };

  markMedicationMissed = (medicine) => {
    const { medicationHistory } = this.state;

    // Kiểm tra xem đã có trong lịch sử dùng thuốc chưa
    const isMedicineMissed = medicationHistory.find(
      (item) => item.name === medicine.name
    );

    if (isMedicineMissed) {
      message.warning("Thuốc đã được đánh dấu bỏ qua trước đó.");
    } else {
      this.setState((prevState) => ({
        medicationHistory: [
          ...prevState.medicationHistory,
          { ...medicine, status: "Bỏ qua" },
        ],
      }));
      message.success("Đã đánh dấu thuốc bỏ qua.");
    }
  };

  handleManualLogChange = (e) => {
    const { value } = e.target;
    this.setState({ manualLog: value });
  };

  saveManualLog = () => {
    const { manualLog } = this.state;

    if (manualLog) {
      // eslint-disable-next-line no-unused-vars
      const logEntry = {
        content: manualLog,
        timestamp: new Date().toLocaleString(),
      };

      this.setState({
        manualLog: "",
      });

      message.success("Đã ghi nhật ký thủ công.");
    } else {
      message.warning("Vui lòng nhập nội dung nhật ký.");
    }
  };

  render() {
    const {
      medicines,
      isModalVisible,
      newMedicine,
      isEditing,
      medicationHistory,
      manualLog,
    } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Thêm thuốc
        </Button>
        <Table dataSource={medicines} columns={this.columns} />

        <Modal
          title={isEditing ? "Sửa thuốc" : "Thêm thuốc"}
          visible={isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item label="Tên thuốc">
              <Input
                name="name"
                value={newMedicine.name}
                onChange={this.handleInputChange}
                placeholder="Tên thuốc(VD: Panadol,...)"
              />
            </Form.Item>
            <Form.Item label="Liều lượng">
              <Input
                name="dosage"
                value={newMedicine.dosage}
                onChange={this.handleInputChange}
                placeholder="VD: 1 viên, 10 ml, 2 muỗng canh, v.v"
              />
            </Form.Item>
            <Form.Item label="Tần suất">
              <Input
                name="frequency"
                value={newMedicine.frequency}
                onChange={this.handleInputChange}
                placeholder="VD: Ngày uống 3 lần, mỗi lần 1 viên"
              />
            </Form.Item>
            <Form.Item label="Bác sĩ kê đơn">
              <Input
                name="prescribedBy"
                value={newMedicine.prescribedBy}
                onChange={this.handleInputChange}
                placeholder="Nhập tên bác sĩ"
              />
            </Form.Item>
          </Form>
        </Modal>

        <div>
          <h2>Lịch sử dùng thuốc</h2>
          <Table dataSource={medicationHistory}>
            <Table.Column title="Tên thuốc" dataIndex="name" />
            <Table.Column title="Liều lượng" dataIndex="dosage" />
            <Table.Column title="Tần suất" dataIndex="frequency" />
            <Table.Column title="Bác sĩ kê đơn" dataIndex="prescribedBy" />
            <Table.Column title="Trạng thái" dataIndex="status" />

            <Table.Column
              title="Hành động"
              render={(_, record) => (
                <>
                  <Button onClick={() => this.markMedicationCompleted(record)}>
                    Đã hoàn thành
                  </Button>
                  <Button onClick={() => this.markMedicationMissed(record)}>
                    Bỏ lỡ
                  </Button>
                </>
              )}
            />
          </Table>
        </div>

        <div>
          <h3>Ghi nhật ký thủ công</h3>
          <Input.TextArea
            value={manualLog}
            onChange={this.handleManualLogChange}
            rows={4}
          />
          <Button onClick={this.saveManualLog}>Lưu</Button>
        </div>
      </div>
    );
  }
}

export default MedicineManagement;
