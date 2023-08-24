import { useState } from "react";
import { Card, Row, Col, Modal, Button } from "antd";
import hospital1 from "../assets/img/hospital1.svg";
import hospital2 from "../assets/img/hospital2.svg";
import hospital3 from "../assets/img/hospital3.svg";
import hospital4 from "../assets/img/hospital4.svg";
import hospital5 from "../assets/img/hospital5.svg";
import hospital6 from "../assets/img/hospital6.svg";
import "./healthCareProviders.css";

const healthCareProviders = [
{
id: 1,
name: "Bệnh viên Bạch Mai",
image: hospital1,
address: "số 78 đường Giải Phóng, phường Phương Mai, quận Đống Đa, Hà Nội",
services: "Dịch vụ A",
website: "http://bachmai.gov.vn/",
},
{
id: 2,
name: "Bệnh viện nhi đồng 1",
image: hospital2,
address: "341 Sư Vạn Hạnh, Phường 10, Quận 10, TP Hồ Chí Minh",
services: "Dịch vụ B",
website: "https://nhidong.org.vn/Index.aspx",
},
{
id: 3,
name: "Bệnh viện nhi trung ương",
image: hospital3,
address: "18/879 đường La Thành, phường Láng Thượng, quận Đống Đa, Hà Nội",
services: "Dịch vụ C",
website: " https://benhviennhitrunguong.gov.vn/",
},
{
id: 4,
name: "Bệnh viện Medlatec",
image: hospital4,
address: "42 P. Nghĩa Dũng, Phúc xá, Ba Đình, Hà Nội",
services: "Dịch vụ C",
website: " https://medlatec.vn/",
},
{
id: 5,
name: "Bệnh viện da khoa Xanh Pôn",
image: hospital5,
address: "12 P. Chu Văn An, Điện Biên, Ba Đình, Hà Nội",
services: "Dịch vụ C",
website: " http://bvxanhpon.vn/",
},
{
id: 6,
name: "Bệnh viện da liễu Trung Ương",
image: hospital6,
address: "15A, Phương Mai, Hà Nội",
services: "Dịch vụ C",
website: " https://dalieu.vn/",
},
];

const HealthCareProviders = () => {
const [selectedProvider, setSelectedProvider] = useState(null);
const [isModalVisible, setIsModalVisible] = useState(false);

const handleProviderSelect = (providerId) => {
setSelectedProvider(providerId);
setIsModalVisible(true);
};

const handleModalClose = () => {
setIsModalVisible(false);
};

return (
<div>
<h1>Healthcare Provider</h1>
<Row gutter={[16,16]}>
{healthCareProviders.map((provider) => (
<Col xs={24} sm={24} md={12} lg={8}  key={provider.id}>
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
onClick={() => handleProviderSelect(provider.id)}
style={{ textAlign: "center" }}
>
<Card.Meta
title={provider.name}
description={
<a
href={provider.website}
target="_blank"
rel="noopener noreferrer"
>
{provider.website}
</a>
}
/>
</Card>
</Col>
))}
</Row>
<Modal
title="Details"
open={isModalVisible}
onCancel={handleModalClose}
footer={[
<Button key="close" onClick={handleModalClose}>
Cancel
</Button>,
]}
>
{selectedProvider&& (
<div>
<p>Provider: {healthCareProviders[selectedProvider - 1].name}</p>
<p>
Address: {healthCareProviders[selectedProvider - 1].address}
</p>
<p>
Service: {healthCareProviders[selectedProvider - 1].services}
</p>
</div>
)}
</Modal>
</div>
);
};

export default HealthCareProviders;
