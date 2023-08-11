import { Col, Card } from "antd";
const { Meta } = Card;

export default function SkeletonCmp() {
  return (
    <Col span={8} style={{ padding: "1rem" }}>
      <Card loading={true}>
        <Meta
          avatar=""
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
  );
}
