import { useDispatch } from 'react-redux';

import { toggleTheme } from '../redux/settingsSlice';
import ThemeSelector from '../../../assets/icons/theme-selector.svg';

const ThemeBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="theme-bar">
      <div className="theme-bar__button">
        <ThemeSelector onClick={() => dispatch(toggleTheme())} />
      </div>
    </div>
  )
}

export default ThemeBar;
