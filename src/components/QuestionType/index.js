// @flow
import * as React from 'react';
import Fieldset from '../Fieldset';
import Dropdown from '../Dropdown';
import YesOrNo from '../YesOrNo';
import PictureChoice from '../PictureChoice';
import FileUpload from '../FileUpload';
import OpinionScale from '../OpinionScale';
import ChoiceBox from '../ChoiceBox';
import Rates from '../Rates';
import TelephoneInput from '../TelephoneInput';

type Theme = {
  [string]: string,
};
type Question = {
  order: number,
  questionType: string,
  variant: string,
  choices: Array<any>,
  text?: string,
  steps: number,
};
type Props = {
  question: Question,
  theme: Theme,
  handleScroll: () => void,
};
export const QuestionType = ({ question, handleScroll, theme }: Props) => {
  const questionType = () => {
    switch (question.questionType) {
      case 'fieldset':
        return (
          <Fieldset
            id={question.order}
            handleScroll={handleScroll}
            variant={question.variant}
            type={question.variant === 'date' ? 'date' : 'text'}
            name={question.variant}
            theme={theme}
            order={question.order}
          />
        );
      case 'yesorno':
        return (
          <YesOrNo
            id={question.order}
            handleScroll={handleScroll}
            theme={theme}
            order={question.order}
          />
        );
      case 'tel':
        return (
          <TelephoneInput
            id={question.order}
            handleScroll={handleScroll}
            order={question.order}
            theme={theme}
          />
        );
      case 'dropdown':
        return (
          <Dropdown
            handleScroll={handleScroll}
            options={question.choices}
            theme={theme}
            order={question.order}
          />
        );
      case 'picture':
        return (
          <PictureChoice
            handleScroll={handleScroll}
            theme={theme}
            text={question.text}
            pictures={question.choices}
            order={question.order}
          />
        );
      case 'rates':
        return (
          <Rates
            handleScroll={handleScroll}
            steps={question.steps}
            order={question.order}
            theme={theme}
          />
        );
      case 'choicebox':
        return (
          <ChoiceBox
            handleScroll={handleScroll}
            choices={question.choices}
            theme={theme}
            order={question.order}
          />
        );
      case 'upload':
        return (
          <FileUpload
            order={question.order}
            theme={theme}
            handleScroll={handleScroll}
          />
        );
      case 'opinion':
        return (
          <OpinionScale
            handleScroll={handleScroll}
            theme={theme}
            order={question.order}
          />
        );
      default:
        break;
    }
  };
  return <>{questionType()}</>;
};

export default QuestionType;
