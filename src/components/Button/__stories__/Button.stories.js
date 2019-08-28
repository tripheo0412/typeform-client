// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { Button } from '..';

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

storiesOf('Button', module)
  .addDecorator(jsxDecorator)
  .add('ok Button', () => (
    <Wrapper>
      <Button handleClick={() => alert('clicked')} text="OK" />
    </Wrapper>
  ))
  .add('Submit Button', () => (
    <Wrapper>
      <Button handleClick={() => alert('clicked')} text="Submit" />
    </Wrapper>
  ));
