import React, { ReactNode } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import Text from './Text';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: ButtonProps): JSX.Element => {
  const { state: themeState } = useThemeContext();

  return (
    <button type={`button`} className={`button ${themeState.theme}`} onClick={onClick}>
      <Text>{children}</Text>
    </button>
  );
};

export default Button;
