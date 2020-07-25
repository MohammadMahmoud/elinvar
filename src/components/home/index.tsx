import React, { useState, useEffect } from 'react';
import { Layout, Input, Radio } from 'antd';
import Products, { ProductProps } from '../products';
import { SearchOutlined } from '@ant-design/icons';
import { RadioChangeEvent } from 'antd/lib/radio/interface';
import './index.css';

interface HomeProps {
  products: ProductProps[];
}

const Home = (props: HomeProps) => {
  const [searchValue, setSearchValue] = useState<string>();
  const [view, setView] = useState<'gird' | 'list'>('list');
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>(
    props.products
  );

  useEffect(() => {
    setFilteredProducts(props.products);
  }, [props.products]);

  const { Content } = Layout;
  const { Search } = Input;

  const handleChangeView = (e: RadioChangeEvent) => {
    setView(e.target.value);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (!value) {
      setFilteredProducts(props.products);
    } else {
      setFilteredProducts(
        props.products.filter((product: ProductProps) =>
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
