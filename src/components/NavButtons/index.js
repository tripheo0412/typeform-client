// @flow

import React from 'react';
import up from './assets/keyboard_arrow_up_24px.svg';
import down from './assets/keyboard_arrow_down_24px.svg';
import './styles.scss';

type Props = {
  handleClick: (...arg: any) => any,
  prev?: boolean,
};

const Button = ({ handleClick, prev }: Props) => (
  <button type="button" onClick={handleClick(prev ? 'prev' : 'next')}>
    <img src={prev ? up : down} alt="icon" />
  </button>
);

const NavButtons = ({ handleClick }: { handleClick: () => any }) => (
  <div className="navbuttons">
    <Button handleClick={handleClick} prev />
    <Button handleClick={handleClick} />
  </div>
);

export default NavButtons;
