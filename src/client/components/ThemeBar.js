import { useDispatch } from 'react-redux';

import { toggleTheme } from '../redux/settingsSlice';
import ThemeSelector from '../../../assets/icons/theme-selector.svg';
import data from '../../../src/client/lib/data.json';

const { settings } = data;

const ThemeBar = () => {
  const dispatch = useDispatch();
  const themeBarLocation = settings.sideBarLocation === 'left' ? 'right' : 'left';

  return (
    <div className={`theme-bar theme-bar--${themeBarLocation}`}>
      <div className="theme-bar__button">
        <ThemeSelector onClick={() => dispatch(toggleTheme())} />
      </div>
      <div className="theme-bar__line" />
    </div>
  )
}

export default ThemeBar;
