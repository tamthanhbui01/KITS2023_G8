import "./Dashboard.css";
import { Col, Row, Card } from "antd";
function Dashboard() {

  return (
    <>
      
      {window.screen.width<568? <div>hi</div>:"" }
      <Row>
        <Col
          style={{ background: "blue", padding: 8 }}
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          xxl={6}
        >
          <Card>6</Card>
        </Col>
        <Col
          style={{ background: "red", padding: 8 }}
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          xxl={6}

        >
          <Card>6</Card>
        </Col>
        <Col
          style={{ background: "green", padding: 8 }}
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={12}
          xxl={12}

        >
          <Card>12</Card>
        </Col>
      </Row>
    </>
  );
}
export default Dashboard;
