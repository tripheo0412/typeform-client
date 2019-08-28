// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { QuestionForm } from '..';
import { hexToRgbA } from '../../../helper';

const buttonColor = '#54491e';
const questionColor = '#3D3D3D';
const backgroundColor = '#f0b30a';
export const questions = {
  theme: {
    '--main-color': buttonColor,
    '--light-color': hexToRgbA(buttonColor, 0.8),
    '--lighten-color': hexToRgbA(buttonColor, 0.6),
    '--lightenest-color': hexToRgbA(buttonColor, 0.2),
    '--dark-color': hexToRgbA(buttonColor),
    '--question-color': questionColor,
    '--background-color': backgroundColor,
  },
  data: [
    { order: '1', type: 'tel', label: 'What is your number?' },
    {
      order: '2',
      type: 'fieldset',
      variant: 'email',
      label: 'What is your email?',
    },
    { order: '3', type: 'yesorno', label: 'Yes Or No?' },
    { order: '8', type: 'dropdown', label: 'Select your option' },
    { order: '5', type: 'opinion', label: 'Select one scale' },
    { order: '6', type: 'rates', steps: 5, label: 'Select your rate' },
    {
      order: '7',
      type: 'fieldset',
      variant: 'shorttext',
      label: 'Write your answer here',
    },
    { order: '4', type: 'upload', label: 'Upload your file here' },
    {
      order: '9',
      type: 'fieldset',
      variant: 'longtext',
      label: 'Write your answer here',
    },
    {
      order: '10',
      type: 'choicebox',
      choices: ['React', 'Redux', 'JavaScript'],
      label: 'select your choice',
    },
    {
      order: '11',
      type: 'picture',
      pictures: [
        {
          text: 'pic 1',
          imgUrl:
            'https://images.typeform.com/images/fegzN68s2EZg/image/default',
        },
        {
          text: 'pic 2',
          imgUrl:
            'https://images.typeform.com/images/fegzN68s2EZg/image/default',
        },
        {
          text: 'pic 1',
          imgUrl:
            'https://images.typeform.com/images/fegzN68s2EZg/image/default',
        },
        {
          text: 'pic 1',
          imgUrl:
            'https://images.typeform.com/images/fegzN68s2EZg/image/default',
        },
        {
          text: 'pic 1',
          imgUrl:
            'https://images.typeform.com/images/fegzN68s2EZg/image/default',
        },
        {
          text: 'pic 1',
          imgUrl:
            'https://images.typeform.com/images/fegzN68s2EZg/image/default',
        },
      ],
      label: 'Select your option',
    },
  ],
};

storiesOf('QuestionForm', module)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <QuestionForm
      questions={questions}
      location={{ state: { from: { pathname: '/HqhrfB2a0' } } }}
    />
  ));
