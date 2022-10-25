import React, { ReactNode } from 'react';
import { useThemeContext } from '../context/ThemeContext';

const Panel = ({ children }: { children: ReactNode }) => {
  const { state: themeState } = useThemeContext();

  return <div className={`panel ${themeState.theme}`}>{children}</div>;
};

export default Panel;
