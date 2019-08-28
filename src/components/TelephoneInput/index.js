/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
// @flow
import * as React from 'react';
import { allCountries } from './allCountries';
import './styles.scss';
import { FormContext } from '../../contexts/FormContext';
import Button from '../Button';

type Theme = {
  [string]: string,
};
type TelType = {
  theme?: Theme,
  order?: number,
  handleScroll?: () => any,
};
export const TelephoneInput = ({ theme, order, handleScroll }: TelType) => {
  const [inputValue, setInputValue] = React.useState('');
  const [errMess, setErrMess] = React.useState(null);
  const [country, setCountry] = React.useState({
    id: '38',
    name: 'finland',
    code: '358',
    format: '041 2345678',
    flag: 'iconFn',
  });
  const [filter, setFilter] = React.useState('');
  const [toggle, setToggle] = React.useState(false);

  const { dispatch } = React.useContext(FormContext);

  const validateInput = () => {
    if (inputValue.length !== country.format.replace(/\s/g, '').length) {
      setErrMess('That phone number is not correct');
      return false;
    }
    setErrMess(null);
    return true;
  };
  const countries = allCountries.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleToggle = () => setToggle(true);

  const handleValueChange = (e: { target: HTMLInputElement }) => {
    setInputValue(e.target.value);
  };

  const handleSearchChange = (e: { target: HTMLInputElement }) => {
    setFilter(e.target.value);
  };

  const handleClickTab = item => () => {
    setCountry(item);
    setToggle(false);
  };

  const handleClickButton = () => {
    if (handleScroll) {
      handleScroll();
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter' && handleScroll) {
      handleScroll();
    }
  };
  const handleBlur = () => {
    if (validateInput()) {
      dispatch({
        type: 'ADD__ANSWER',
        payload: { order, value: [`+${country.code} ${inputValue}`] },
      });
    } else {
      dispatch({
        type: 'REMOVE__ANSWER',
        payload: { order },
      });
    }
  };
  return (
    <>
      <div className="telephone" style={theme}>
        <div
          className="telephone__flag"
          role="button"
          onKeyPress={() => {}}
          tabIndex={0}
          onClick={handleToggle}
        >
          <div className="telephone__flag--icon">
            <img
              src={require(`../../assets/icons/flags/${country.flag}.svg`)}
              alt="flag"
            />
          </div>
          <div className="telephone__flag--toggle"></div>
        </div>
        <div className="fieldset">
          <input
            id={order}
            type="number"
            placeholder={country.format}
            value={inputValue}
            onChange={handleValueChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
          />
        </div>

        {toggle && (
          <div className="telephone__dropdown">
            <div className="dropdown__input ">
              <div className="fieldset">
                <input
                  type="text"
                  placeholder="Search countries"
                  onChange={handleSearchChange}
                  value={filter}
                />
              </div>
            </div>
            <div className="dropdown__list">
              {countries.map(item => (
                <div
                  key={item.id}
                  className="dropdown__tab"
                  role="button"
                  tabIndex={0}
                  onKeyPress={() => {}}
                  onClick={handleClickTab(item)}
                >
                  <div>
                    <img
                      src={require(`../../assets/icons/flags/${item.flag}.svg`)}
                      alt="flag"
                    />
                    <span>{item.name}</span>
                  </div>
                  <div>+{item.code}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {errMess}
      <div className="submit__wrapper">
        {inputValue.length > 4 && (
          <Button text="OK" theme={theme} handleClick={handleClickButton} />
        )}
      </div>
    </>
  );
};

export default TelephoneInput;
