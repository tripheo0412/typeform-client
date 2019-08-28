import * as React from 'react';
import { shallow } from 'enzyme';
import { Submit } from '..';

it('renders Submit without crashing ', () => {
  shallow(<Submit />);
});
