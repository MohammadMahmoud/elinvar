import React from 'react';
import { Button, Col, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from '../../types';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/cartActions';
import './style.css';

const ProductListView: React.FC<Product> = ({
  description,
  name,
  image,
  productID,
  unitPrice,
  unitsInStock,
}: Product) => {
  const dispatch = useDispatch();
  const handleAddProductToCart = () => {
    dispatch(
      addProduct({
        description,
        name,
        image,
        productID,
        unitPrice,
        unitsInStock,
      })
    );
  };
  return (
    <div className='product-list-view'>
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
            onClick={handleAddProductToCart}
            type='primary'
            icon={<ShoppingCartOutlined />}
          >
            Add to cart
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductListView;
