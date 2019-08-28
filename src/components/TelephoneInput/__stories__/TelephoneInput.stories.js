// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { TelephoneInput } from '..';

const styles = {
  height: '840px',
  paddingLeft: '50px',
  paddingRight: '50px',
  paddingTop: '24px',
  paddingBottom: '24px',
  margin: '0 auto',
};
const Wrapper = ({ children }: { children: React.Node }) => (
  <div style={styles}>{children}</div>
);

storiesOf('TelephoneInput', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <Wrapper>
      <TelephoneInput />
    </Wrapper>
  ));
