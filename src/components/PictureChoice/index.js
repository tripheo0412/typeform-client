// @flow
import * as React from 'react';
import classNames from 'classnames';
import IconCheck from '../../assets/icons/iconCheck.svg';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';
import Button from '../Button';

type Theme = {
  [string]: string,
};
type PicturesType = {
  text: string,
  imgUrl: string,
  theme?: Theme,
  letter?: string,
  checked?: boolean,
  handleClick?: () => any,
};
type PictureChoiceType = {
  theme?: Theme,
  order?: number,
  handleScroll?: () => any,
  pictures: Array<{
    value: string,
    text: string,
  }>,
};
export const PictureChoice = ({
  theme,
  pictures,
  order,
  handleScroll,
}: PictureChoiceType) => {
  const { dispatch } = React.useContext(FormContext);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const initialState = () => {
    const obj = {};
    for (let i = 0; i < pictures.length; i++)
      if (pictures[i] !== undefined) obj[alphabet[i]] = false;
    return obj;
  };
  const [checked, setCheck] = React.useState(initialState());
  const handleClick = el => () =>
    setCheck({
      ...checked,
      [el]: !checked[el],
    });
  const firstUpdate = React.useRef(true);
  React.useLayoutEffect(() => {
    const values = () => {
      const arr = [];
      const keys = Object.keys(checked);
      keys.forEach((el, index) => {
        if (checked[el] === true) {
          arr.push(pictures[index].value);
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
  }, [checked, dispatch, order, pictures]);

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter' && handleScroll) {
      handleScroll();
    }
  };
  return (
    <div
      style={{ outline: 'none' }}
      id={order}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      {pictures.map((pic, index) => (
        <Pictures
          key={pic.text}
          imgUrl={pic.value}
          text={pic.text}
          letter={alphabet[index]}
          theme={theme}
          checked={checked[alphabet[index]]}
          handleClick={handleClick(alphabet[index])}
        />
      ))}
      <div className="submit__wrapper">
        <Button text="OK" theme={theme} handleClick={handleScroll} />
      </div>
    </div>
  );
};
export const Pictures = ({
  imgUrl,
  text,
  letter,
  theme,
  checked,
  handleClick,
}: PicturesType) => {
  const [hover, setHover] = React.useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div
      className={classNames({
        picturechoice: true,
        blink: checked,
      })}
      style={theme}
      role="button"
      onClick={handleClick}
      onKeyPress={() => {}}
      tabIndex={0}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {checked && (
        <div className="picturechoice__corner">
          <div className="picturechoice__check">
            <img src={IconCheck} alt="icon check" />
          </div>
        </div>
      )}
      <div className="picturechoice__items">
        <img
          className="picturechoice__image"
          src={imgUrl}
          alt="picturechoice"
        />
        <div className="picturechoice__footer">
          <div
            className={classNames('picturechoice__keyhelper', {
              'picturechoice__keyhelper--check blinker': checked,
            })}
          >
            {letter}
          </div>
          <div className="picturechoice__text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default PictureChoice;
