// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Rates } from '..';

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

storiesOf('Rates', module)
  .addDecorator(jsxDecorator)
  .add('5 rate', () => (
    <Wrapper>
      <Rates steps={5} />
    </Wrapper>
  ));
