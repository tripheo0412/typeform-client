import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Submit } from '..';

const color = '#4fb0ae';
const theme = {
  '--main-color': color,
  '--button-color': color,
  '--btnlight-color': color,
};
storiesOf('Submit', module)
  .addDecorator(jsxDecorator)
  .add('default', () => <Submit steps={5} theme={theme} />);
