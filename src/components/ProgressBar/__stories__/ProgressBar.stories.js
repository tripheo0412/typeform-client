import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from '..';

storiesOf('Progress Bar', module).add('default', () => (
  <>
    <ProgressBar totalQuestions={10} />
    <ProgressBar totalQuestions={25} currentQuestion={1} />
    <ProgressBar totalQuestions={10} currentQuestion={2} />
    <ProgressBar totalQuestions={10} currentQuestion={3} />
    <ProgressBar totalQuestions={10} currentQuestion={4} />
    <ProgressBar totalQuestions={10} currentQuestion={5} />
    <ProgressBar totalQuestions={10} currentQuestion={6} />
    <ProgressBar totalQuestions={10} currentQuestion={7} />
    <ProgressBar totalQuestions={10} currentQuestion={8} />
    <ProgressBar totalQuestions={10} currentQuestion={9} />
    <ProgressBar totalQuestions={10} currentQuestion={10} />
  </>
));
