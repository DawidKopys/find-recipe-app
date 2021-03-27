import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Navbar.js';

describe('Navbar', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
