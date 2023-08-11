import { Col, Card } from "antd";
import { Product } from "./../duck/types";

const { Meta } = Card;

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  return (
    <Col span={8} style={{ padding: "1rem" }}>
      <Card hoverable cover={<img alt="example" src={product.image} />}>
        <Meta title={product.name} description={product.description} />
      </Card>
    </Col>
  );
}
