import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Navigation = (): JSX.Element => {
  const { state: themeState } = useThemeContext();

  return (
    <ul className={`navigation ${themeState.theme}`}>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
};

export default Navigation;
