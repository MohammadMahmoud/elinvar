import React from 'react';
import ProductListView from '../product-list-view';
import ProductGridView from '../product-grid-view';
import { Row } from 'antd';

interface ProductListProps {
  view: 'gird' | 'list';
  productList: ProductProps[];
}

export interface ProductProps {
  description: string;
  name: string;
  image: string;
  productID: number;
  unitPrice: number;
  unitsInStock: number;
}

const Products: React.FC<ProductListProps> = ({
  productList,
  view,
}: ProductListProps) => (
  <>
    {view === 'list' ? (
      productList.map((product: ProductProps) => (
        <ProductListView key={product.productID} {...product} />
      ))
    ) : (
      <Row>
        {productList.map((product: ProductProps) => (
          <ProductGridView key={product.productID} {...product} />
        ))}
      </Row>
    )}
  </>
);
export default Products;
