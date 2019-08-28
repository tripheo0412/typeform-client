// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { ChoiceBox } from '..';

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

storiesOf('ChoiceBox', module)
  .addDecorator(jsxDecorator)
  .add('Multiple choice', () => (
    <Wrapper>
      <ChoiceBox
        choices={[
          { value: 'React' },
          { value: 'Redux' },
          { value: 'Javascript' },
        ]}
      />
    </Wrapper>
  ));
