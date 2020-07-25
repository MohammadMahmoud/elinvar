import React from 'react';
import { Col, Card, Button } from 'antd';
import { ProductProps } from '../products';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/cartActions';
import { PlusCircleOutlined } from '@ant-design/icons';

const ProductListView: React.FC<ProductProps> = ({
  description,
  name,
  image,
  productID,
  unitPrice,
  unitsInStock,
}: ProductProps) => {
  const dispatch = useDispatch();
  const handleAddProductToCart = () => {
    console.log('hi');
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
