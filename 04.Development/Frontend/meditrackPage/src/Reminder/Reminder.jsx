/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button, notification } from "antd";

class Reminder extends React.Component {
  state = {
    isModalVisible: false,
    currentMedicine: null,
  };

  componentDidMount() {
    this.startReminder();
  }

  componentWillUnmount() {
    this.stopReminder();
  }

  startReminder = () => {
    this.reminderInterval = setInterval(
      this.checkMedicationSchedule,
      1000 * 60
    ); // Kiểm tra lịch uống thuốc mỗi phút
  };

  stopReminder = () => {
    clearInterval(this.reminderInterval);
  };

  checkMedicationSchedule = () => {
    const { medicines } = this.props;

    // Lấy ngày và giờ hiện tại
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString();
    const currentTime = currentDate.toLocaleTimeString();

    // Tìm kiếm thuốc cần uống trong đơn thuốc
    const upcomingMedicine = medicines.find(
      (medicine) =>
        medicine.frequency &&
        medicine.frequency.includes(currentDay) &&
        medicine.frequency.includes(currentTime)
    );

    if (upcomingMedicine) {
      // Hiển thị thông báo nhắc nhở
      this.showNotification(upcomingMedicine);
    }
  };

  showNotification = (medicine) => {
    const { name, dosage, frequency, prescribedBy } = medicine;

    notification.info({
      message: "Lời nhắc uống thuốc",
      description: (
        <div>
          <p>Tên thuốc: {name}</p>
          <p>Liều lượng: {dosage}</p>
          <p>Tần suất: {frequency}</p>
          <p>Bác sĩ kê đơn: {prescribedBy}</p>
        </div>
      ),
      duration: 0,
      placement: "bottomRight",
      closeIcon: <></>,
      btn: (
        <Button
          type="primary"
          onClick={() => this.showMedicineDetails(medicine)}
        >
          Xem chi tiết
        </Button>
      ),
    });
  };

  showMedicineDetails = (medicine) => {
    this.setState({
      isModalVisible: true,
      currentMedicine: medicine,
    });
  };

  handleModalClose = () => {
    this.setState({
      isModalVisible: false,
      currentMedicine: null,
    });
  };

  render() {
    const { isModalVisible, currentMedicine } = this.state;

    return (
      <>
        <Modal
          title="Chi tiết thuốc"
          visible={isModalVisible}
          onCancel={this.handleModalClose}
          footer={null}
        >
          {currentMedicine && (
            <div>
              <p>Tên thuốc: {currentMedicine.name}</p>
              <p>Liều lượng: {currentMedicine.dosage}</p>
              <p>Tần suất: {currentMedicine.frequency}</p>
              <p>Bác sĩ kê đơn: {currentMedicine.prescribedBy}</p>
            </div>
          )}
        </Modal>
      </>
    );
  }
}

export default Reminder;
