// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ChoiceTab } from '..';

const styles = {
  paddingLeft: '70px',
  paddingRight: '70px',
  paddingTop: '24px',
  paddingBottom: '24px',
  margin: '0 auto',
};
const Wrapper = ({ children }: { children: React.Node }) => (
  <div style={styles}>{children}</div>
);

storiesOf('ChoiceTab', module)
  .addDecorator(jsxDecorator)
  .add('Choice Tab', () => (
    <Wrapper>
      <ChoiceTab checked letter="A" handleToggle={() => true} text="Test" />
    </Wrapper>
  ));
