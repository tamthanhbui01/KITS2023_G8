import React from "react";
import { Card, Row, Col, Modal, Button } from "antd";
import hospital1 from "../img/Hospital1.svg";
import hospital2 from "../img/Hospital2.svg";
import hospital3 from "../img/Hospital3.svg";
import hospital4 from "../img/Hospital4.svg";
import hospital5 from "../img/Hospital5.svg";
import hospital6 from "../img/Hospital6.svg";
import "./healthCareProviders.css";
const healthCareProviders = [
  {
    id: 1,
    name: "Bệnh viên Bạch Mai",
    image: hospital1,
    address: "số 78 đường Giải Phóng, phường Phương Mai, quận Đống Đa, Hà Nội",
    services: "Dịch vụ A",
  },
  {
    id: 2,
    name: "Bệnh viện nhi đồng 1",
    image: hospital2,
    address: "341 Sư Vạn Hạnh, Phường 10, Quận 10, TP Hồ Chí Minh",
    services: "Dịch vụ B",
  },
  {
    id: 3,
    name: "Bệnh viện nhi trung ương",
    image: hospital3,
    address: "18/879 đường La Thành, phường Láng Thượng, quận Đống Đa, Hà Nội",
    services: "Dịch vụ C",
  },
  {
    id: 4,
    name: "Bệnh viện Medlatec",
    image: hospital4,
    address: "42 P. Nghĩa Dũng, Phúc xá, Ba Đình, Hà Nội",
    services: "Dịch vụ C",
  },
  {
    id: 5,
    name: "Bệnh viện da khoa Xanh Pôn",
    image: hospital5,
    address: "12 P. Chu Văn An, Điện Biên, Ba Đình, Hà Nội",
    services: "Dịch vụ C",
  },
  {
    id: 6,
    name: "Bệnh viện da liễu Trung Ương",
    image: hospital6,
    address: "15A, Phương Mai, Hà Nội",
    services: "Dịch vụ C",
  },
];

class HealthCareProviders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProvider: null,
      isModalVisible: false,
    };
  }

  handleProviderSelect = (providerId) => {
    // Cập nhật trạng thái khi người dùng chọn nhà cung cấp
    this.setState({ selectedProvider: providerId, isModalVisible: true });
  };

  handleModalClose = () => {
    // Đóng form
    this.setState({ isModalVisible: false });
  };

  render() {
    const { selectedProvider, isModalVisible } = this.state;

    return (
      <div>
        <h2>Hợp tác với các nhà cung cấp dịch vụ chăm sóc sức khỏe</h2>
        <Row gutter={16}>
          {healthCareProviders.map((provider) => (
            <Col span={8} key={provider.id}>
              <Card
                hoverable
                cover={
                  <div
                    className="image-container"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "250px",
                      height: "250px",
                    }}
                  >
                    <img
                      alt={provider.name}
                      src={provider.image}
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                }
                onClick={() => this.handleProviderSelect(provider.id)}
                style={{ textAlign: "center" }}
              >
                <Card.Meta title={provider.name} />
              </Card>
            </Col>
          ))}
        </Row>
        <Modal
          title="Thông tin nhà cung cấp"
          visible={isModalVisible}
          onCancel={this.handleModalClose}
          footer={[
            <Button key="close" onClick={this.handleModalClose}>
              Đóng
            </Button>,
          ]}
        >
          {selectedProvider && (
            <div>
              <p>Tên: {healthCareProviders[selectedProvider - 1].name}</p>
              <p>
                Địa chỉ: {healthCareProviders[selectedProvider - 1].address}
              </p>
              <p>
                Dịch vụ: {healthCareProviders[selectedProvider - 1].services}
              </p>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default HealthCareProviders;
