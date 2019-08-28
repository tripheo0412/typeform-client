// @flow
import * as React from 'react';
import Button from '../Button';
import Thumb from '../../assets/thumb.gif';
import './styles.scss';

type Theme = {
  [string]: string,
};
export const Submit = ({ theme }: { theme: Theme }) => {
  const handleClick = () => {
    window.open('localhost:300');
  };
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div
      className="submit"
      style={theme}
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      <div className="submit__content">
        <img src={Thumb} alt="thumb up" />

        <h1>
          Thanks for completing this Integrify form
          <br />
          Now <strong>create your own</strong>— it's free, easy, &amp; beautiful
        </h1>

        <Button
          text="Create a Integrify form"
          theme={theme}
          handleClick={handleClick}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Submit;
