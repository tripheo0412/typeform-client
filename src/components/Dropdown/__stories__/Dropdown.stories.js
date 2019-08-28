// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Dropdown } from '..';

const styles = {
  height: '840px',
  paddingLeft: '70px',
  paddingRight: '70px',
  paddingTop: '24px',
  paddingBottom: '24px',
  margin: '0 auto',
};
const Wrapper = ({ children }: { children: React.Node }) => (
  <div style={styles}>{children}</div>
);

storiesOf('Dropdown', module)
  .addDecorator(jsxDecorator)
  .add('Dropdown', () => (
    <Wrapper>
      <Dropdown
        options={[
          'option 1',
          'option 2',
          'option 3',
          'select 1',
          'select 2',
          'select 3',
        ]}
      />
    </Wrapper>
  ));
