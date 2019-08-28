// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { OpinionScale } from '..';

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

storiesOf('OpinionScale', module)
  .addDecorator(jsxDecorator)
  .add('Opinion scale', () => (
    <Wrapper>
      <OpinionScale />
    </Wrapper>
  ));
