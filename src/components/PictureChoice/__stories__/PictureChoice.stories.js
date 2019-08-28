// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import PictureChoice from '..';

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

const pictures = [
  {
    text: 'pic 1',
    value: 'https://images.typeform.com/images/fegzN68s2EZg/image/default',
  },
  {
    text: 'pic 2',
    value: 'https://images.typeform.com/images/fegzN68s2EZg/image/default',
  },
];
storiesOf('PictureChoice', module)
  .addDecorator(jsxDecorator)
  .add('Picture choice', () => (
    <Wrapper>
      <PictureChoice pictures={pictures} />
    </Wrapper>
  ));
