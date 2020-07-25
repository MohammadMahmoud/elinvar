import React from 'react';
import { Col, Card, Button } from 'antd';
import { ProductProps } from '../products';
import Meta from 'antd/lib/card/Meta';
import { PlusCircleOutlined } from '@ant-design/icons';

const ProductListView: React.FC<ProductProps> = ({
  description,
  name,
  image,
  productID,
  unitPrice,
  unitsInStock,
}: ProductProps) => {
  const handleAddToCart = (item: string) => {};
  return (
    <Col span={4} style={{ margin: '15px 0' }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={image} />}
      >
        <Meta title={name} description={description} />
        <Button
          style={{ float: 'right', marginTop: '25px' }}
          onClick={() => handleAddToCart}
        >
          <PlusCircleOutlined />
        </Button>
      </Card>
    </Col>
  );
};

export default ProductListView;
