import React from 'react';
import { List, Button, Col, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ProductProps } from '../products';

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
    <List.Item>
      <Row>
        <Col className='col' xs={24} md={3}>
          <img style={{ width: '10vw' }} src={image} alt={name} />
        </Col>
        <Col xs={24} md={18}>
          <p>{name}</p>
        </Col>
        <Col className='col' xs={24} md={3}>
          <h3 className='price'>€ {unitPrice}</h3>
          <p style={{ textAlign: 'center' }}>
            Including VAT <br /> Free Delivery
          </p>
          <Button
            onClick={() => handleAddToCart(name)}
            type='primary'
            icon={<ShoppingCartOutlined />}
          >
            Add to cart
          </Button>
        </Col>
      </Row>
    </List.Item>
  );
};

export default ProductListView;
