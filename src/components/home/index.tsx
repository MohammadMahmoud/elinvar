import React, { useState, useEffect } from 'react';
import { Layout, Input, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import Products from '../products';
import { Product } from '../../types';
import './style.css';

interface HomeProps {
  products: Product[];
}

const Home = ({ products }: HomeProps) => {
  const [searchValue, setSearchValue] = useState<string>();

  const [view, setView] = useState<'gird' | 'list'>('list');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const { Content } = Layout;
  const { Search } = Input;

  const handleChangeView = (e: RadioChangeEvent) => {
    setView(e.target.value);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (!value) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product: Product) =>
          product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      );
    }
  };

  return (
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className='search-viewStyle-area'>
          <Search
            value={searchValue}
            placeholder='Search Product'
            enterButton={<SearchOutlined />}
            size='large'
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Radio.Group
            options={[
              { label: 'Grid', value: 'grid' },
              { label: 'List', value: 'list' },
            ]}
            onChange={(e) => handleChangeView(e)}
            value={view}
            optionType='button'
          />
        </div>
        <div
          className='site-layout-background'
          style={{ padding: 24, minHeight: 360 }}
        >
          <Products view={view} productList={filteredProducts} />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
