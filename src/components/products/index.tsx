import React from 'react';
import { Product } from '../../types';
import ProductListView from '../product-list-view';
import ProductGridView from '../product-grid-view';
import { Row } from 'antd';

interface ProductListProps {
  view: 'gird' | 'list';
  productList: Product[];
}

const Products: React.FC<ProductListProps> = ({
  productList,
  view,
}: ProductListProps) => (
  <>
    {view === 'list' ? (
      productList.map((product: Product) => (
        <ProductListView key={product.productID} {...product} />
      ))
    ) : (
      <Row>
        {productList.map((product: Product) => (
          <ProductGridView key={product.productID} {...product} />
        ))}
      </Row>
    )}
  </>
);
export default Products;
