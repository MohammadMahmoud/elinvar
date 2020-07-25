import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Cart from './components/cart';
import Footer from './components/footer';
import { ProductProps } from './components/products';

const App = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch('https://private-3efa8-products123.apiary-mock.com/products')
      .then((res) => res.json())
      .then((products) => {
        setProducts(products.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/'>
            <Home products={products} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
