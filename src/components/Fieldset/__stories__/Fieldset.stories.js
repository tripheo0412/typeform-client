// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Fieldset } from '..';

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

storiesOf('Fieldset', module)
  .addDecorator(jsxDecorator)
  .add('Type phone number', () => (
    <Wrapper>
      <Fieldset variant="phone" type="text" placeholder="+358 457 123 45 67" />
    </Wrapper>
  ))
  .add('Type Short text', () => (
    <Wrapper>
      <Fieldset type="text" placeholder="Type your answer here..." />
    </Wrapper>
  ))
  .add('Type long text', () => (
    <Wrapper>
      <Fieldset
        type="text"
        variant="longtext"
        placeholder="Type your answer here..."
      />
    </Wrapper>
  ))
  .add('Type date', () => (
    <Wrapper>
      <Fieldset type="date" />
    </Wrapper>
  ))
  .add('Type Email', () => (
    <Wrapper>
      <Fieldset
        type="email"
        variant="email"
        placeholder="Type your email here..."
      />
    </Wrapper>
  ))
  .add('Type website', () => (
    <Wrapper>
      <Fieldset type="text" variant="website" placeholder="https://" />
    </Wrapper>
  ));
