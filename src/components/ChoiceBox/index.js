// @flow
import * as React from 'react';
import ChoiceTab from '../ChoiceTab';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';
import Button from '../Button';

type Theme = {
  [string]: string,
};
type ChoiceBoxType = {
  choices: Array<{ value: string }>,
  order?: number,
  theme?: Theme,
  handleScroll?: () => any,
};

export const ChoiceBox = ({
  choices,
  theme,
  order,
  handleScroll,
}: ChoiceBoxType) => {
  const { dispatch } = React.useContext(FormContext);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const tabs = alphabet.slice(0, choices.length);

  const initialState = () => {
    const obj = {};
    for (let i = 0; i < choices.length; i++)
      if (choices[i] !== undefined) obj[choices[i].value] = false;
    return obj;
  };

  const [state, setState] = React.useState(initialState());
  const firstUpdate = React.useRef(true);
  const handleCheck = (index: string) => () => {
    setState({
      ...state,
      [index]: !state[index],
    });
  };

  React.useLayoutEffect(() => {
    const values = () => {
      const arr = [];
      const keys = Object.keys(state);
      keys.forEach(el => {
        if (state[el] === true) {
          arr.push(el);
        }
      });
      return arr;
    };
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    dispatch({
      type: 'ADD__ANSWER',
      payload: { order, value: values() },
    });
  }, [dispatch, order, state]);

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter' && handleScroll) {
      handleScroll();
    }
  };
  return (
    <div
      id={order}
      className="choicebox"
      data-theme={theme}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <p>Choose as many as you like</p>
      {choices.map((item, index) => (
        <ChoiceTab
          key={item.value}
          checked={state[choices[index].value]}
          handleToggle={handleCheck(choices[index].value)}
          theme={theme}
          letter={tabs[index]}
          text={item.value}
        />
      ))}
      <div className="submit__wrapper">
        <Button text="OK" theme={theme} handleClick={handleScroll} />
      </div>
    </div>
  );
};
export default ChoiceBox;
