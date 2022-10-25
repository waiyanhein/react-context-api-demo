import React, { ReactNode } from 'react';
import { useThemeContext } from '../context/ThemeContext';

const Text = ({ children }: { children: ReactNode }) => {
  const { state: themeState } = useThemeContext();

  return <span className={`text ${themeState.theme}`}>{children}</span>;
};

export default Text;
