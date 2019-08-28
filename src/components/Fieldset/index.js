// @flow
import * as React from 'react';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';
import Button from '../Button';

type Theme = {
  [string]: string,
};

type FieldsetType = {
  type?: string,
  theme?: Theme,
  name?: string,
  variant?: string,
  handleFocus?: () => any,
  handleScroll?: () => any,
  order?: number,
};

export const Fieldset = ({
  type,
  theme,
  variant,
  name,
  order,
  handleFocus,
  handleScroll,
}: FieldsetType) => {
  const [inputValue, setInputValue] = React.useState('');
  const [errMess, setErrMess] = React.useState(null);
  const { dispatch } = React.useContext(FormContext);

  const validateInput = () => {
    switch (variant) {
      case 'email':
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
          setErrMess(null);
          return true;
        }
        return (
          inputValue.length > 0 &&
          setErrMess("Hmm...That email doesn't look valid")
        );
      case 'website':
        if (/^(http|https):\/\/[^ "]+$/i.test(inputValue)) {
          setErrMess(null);
          return true;
        }
        return inputValue.length > 0 && setErrMess('The website is incorrect');
      default:
        return true;
    }
  };
  const handleClick = () => {
    if (!errMess && handleScroll) {
      handleScroll();
    } else {
      return null;
    }
  };
  const handleChange = (e: { target: HTMLInputElement }) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter' && !errMess && handleScroll) {
      handleScroll();
    }
  };
  const handleBlur = () => {
    if (inputValue.length < 3 || !validateInput()) {
      dispatch({
        type: 'REMOVE__ANSWER',
        payload: { order },
      });
    } else {
      dispatch({
        type: 'ADD__ANSWER',
        payload: { order, value: [inputValue] },
      });
    }
  };
  const placeholderText = {
    email: 'Type your email here...',
    website: 'https://',
    shorttext: 'Type your answer here...',
    longtext: 'Type your answer here...',
    text: 'Type your answer here...',
  };
  return (
    <div className="fieldset" style={theme}>
      {variant === 'longtext' ? (
        <>
          <textarea
            id={order}
            variant={variant}
            type={inputValue}
            placeholder="type your answer"
            value={inputValue}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
          />
          {errMess}
          {inputValue.length > 4 && validateInput && (
            <div className="submit__wrapper">
              <Button text="OK" theme={theme} handleClick={handleClick} />
            </div>
          )}
        </>
      ) : (
        <>
          <input
            id={order}
            variant={variant}
            type={type}
            placeholder={placeholderText[variant || 'text']}
            value={inputValue}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onKeyPress={handleKeyPress}
          />
          {errMess}
          {inputValue.length > 2 && (
            <div className="submit__wrapper">
              <Button text="OK" theme={theme} handleClick={handleClick} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Fieldset;
