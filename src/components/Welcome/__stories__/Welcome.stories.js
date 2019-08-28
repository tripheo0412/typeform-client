// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { Welcome } from '..';

storiesOf('Welcome screen', module)
  .addDecorator(jsxDecorator)
  .add('Welcome Screen with image', () => (
    <Welcome
      text="Welcome Screen with image"
      imgUrl="https://images.typeform.com/images/fegzN68s2EZg/image/default"
    />
  ))
  .add('Welcome Screen without image', () => (
    <Welcome text="Welcome Screen without image" />
  ));
