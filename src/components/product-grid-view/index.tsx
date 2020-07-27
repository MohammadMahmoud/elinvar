import React from 'react';
import { Col, Card, Button } from 'antd';
import { Product } from '../../types';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/cartActions';
import { PlusCircleOutlined } from '@ant-design/icons';

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
    <Col span={4} style={{ margin: '15px 0' }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={name} src={image} />}
      >
        <Meta title={name} description={description} />
        <div>
          <Button
            style={{ float: 'right', marginTop: '25px' }}
            onClick={handleAddProductToCart}
          >
            <PlusCircleOutlined />
          </Button>
          <p>Price : {unitPrice}</p>
          <p>units in stock : {unitsInStock}</p>
        </div>
      </Card>
    </Col>
  );
};

export default ProductListView;
