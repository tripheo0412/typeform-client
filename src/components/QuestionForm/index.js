// @flow
import * as React from 'react';
import { hexToRgbA } from '../../helper';
import QuestionLabel from '../QuestionLabel';
import Button from '../Button';
import QuestionType from '../QuestionType';
import ProgressBar from '../ProgressBar';
import NavButtons from '../NavButtons';
import Welcome from '../Welcome';
import Submit from '../Submit';
import { FormContext } from '../../contexts/FormContext';
import './styles.scss';

type Props = {
  location: Object,
};

export const QuestionForm = ({ location }: Props) => {
  const [current, setCurrent] = React.useState(0);
  const [startOn, setStartOn] = React.useState(true);
  const [showSubmit, setShowSubmit] = React.useState(false);
  const { state, formService } = React.useContext(FormContext);
  React.useEffect(() => {
    console.log('run');
    const fetchFormData = () => {
      formService.get(location.pathname);
    };
    fetchFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data, responses } = state;
  const theme = {
    '--main-color': data.theme.answerColor,
    '--light-color': hexToRgbA(data.theme.answerColor, 0.8),
    '--lighten-color': hexToRgbA(data.theme.answerColor, 0.6),
    '--lightenest-color': hexToRgbA(data.theme.answerColor, 0.2),
    '--dark-color': hexToRgbA(data.theme.answerColor),
    '--question-color': data.theme.questionColor,
    '--button-color': data.theme.buttonColor,
    '--btnlight-color': hexToRgbA(data.theme.buttonColor, 0.8),
    '--background-color': data.theme.backgroundColor,
  };

  React.useEffect(() => {
    const haveValue = responses.filter(res => res.value);
    setCurrent(haveValue.length);
  }, [responses]);

  const welcomeScreen = data.questions.find(q => q.questionType === 'welcome');
  const filterWelcome = data.questions.filter(
    q => q.questionType !== 'welcome'
  );
  const sortQuestion = filterWelcome.sort((a, b) => a.order - b.order);

  const handleSubmit = () => {
    console.log(data);
    formService.update(state.responses, location.pathname);
    setShowSubmit(true);
  };
  const answered = () => responses.filter(q => q.value).length;
  const handleScroll = order => () => {
    setCurrent(order);
    const scrollEl = document.getElementById(`id${Number(order) + 1}`);
    const nextEl = document.getElementById(`${Number(order) + 1}`);

    if (nextEl && scrollEl) {
      setTimeout(() => {
        scrollEl.scrollIntoView();
        nextEl.focus();
      }, 1000);
    }
  };

  const handleScrollButton = str => () => {
    const next = document.querySelector(`#id${current + 1}`);
    const prev = document.querySelector(`#id${current - 1}`);
    if (str === 'next' && next) {
      setCurrent(current + 1);
      next.scrollIntoView();
      next.focus();
    } else if (str === 'prev' && current !== 0 && prev) {
      setCurrent(current - 1);
      prev.scrollIntoView();
      prev.focus();
    }
  };
  const whichComponent = () => {
    if (welcomeScreen && startOn) {
      return (
        <Welcome
          theme={theme}
          text={welcomeScreen.title}
          imgUrl={welcomeScreen.value}
          handleStart={() => setStartOn(false)}
        />
      );
    }
    if (showSubmit) {
      return <Submit theme={theme} />;
    }
  };

  return (
    <div className="wrapper__screen">
      {whichComponent() || (
        <div className="base__root">
          <div className="question__wrapper" style={theme}>
            <div className="question__form">
              <main>
                {sortQuestion.map(question => (
                  <div
                    className="question__main"
                    key={question.order}
                    id={`id${question.order}`}
                  >
                    <section className="content__wrapperr">
                      <QuestionLabel
                        theme={theme}
                        counter={question.order}
                        label={question.title}
                      >
                        <QuestionType
                          question={question}
                          handleScroll={handleScroll(question.order)}
                          theme={theme}
                        />
                      </QuestionLabel>
                    </section>
                  </div>
                ))}
              </main>
              <section
                className="question__submit"
                id={`${data.questions.length + 1}`}
              >
                <div className="content__wrapper">
                  <div className="submit__content">
                    <Button
                      text="Submit"
                      theme={theme}
                      handleClick={handleSubmit}
                    />
                    <div className="submit__text">Never submit passwords!</div>
                  </div>
                </div>
              </section>
            </div>
            <div className="question__progressbar">
              <div className="question__progressbar--bar">
                <ProgressBar
                  currentQuestion={answered()}
                  totalQuestions={sortQuestion.length}
                  theme={theme}
                />
              </div>

              <div className="question__progressbar--buttons">
                <NavButtons handleClick={handleScrollButton} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
