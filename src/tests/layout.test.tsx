import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../components/home';

test('snapshot layout', () => {
  const layoutTree = renderer.create(<Layout />).toJSON();
  expect(layoutTree).toMatchSnapshot();
});
