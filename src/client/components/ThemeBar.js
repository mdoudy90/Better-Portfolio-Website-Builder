// import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { toggleTheme } from '../redux/settingsSlice';
import ThemeSelector from '../../../assets/icons/theme-selector.svg';

const ThemeBar = () => {
  const dispatch = useDispatch();

  //! FUN EFFECT
  // useEffect(() => {
  //   let themeInterval = setInterval(() => {
  //     dispatch(toggleTheme())
  //   }, 1250);
  //   return (
  //     () => { clearInterval(themeInterval); }
  //   )
  // }, []);

  return (
    <div className="theme-bar">
      <div className="theme-bar__button">
        <ThemeSelector onClick={() => dispatch(toggleTheme())} />
      </div>
      <div className="theme-bar__line" />
    </div>
  )
}

export default ThemeBar;
