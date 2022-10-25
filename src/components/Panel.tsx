import React, { ReactNode } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import Text from './Text';

const Panel = ({ children }: { children: ReactNode }) => {
  const { state: themeState } = useThemeContext();

  return (
    <div className={`panel ${themeState.theme}`}>
      <Text>{children}</Text>
    </div>
  );
};

export default Panel;
