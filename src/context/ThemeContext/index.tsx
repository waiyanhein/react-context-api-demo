import React, { createContext, useContext, useReducer } from 'react';
import { ThemeState, initialState, reducer } from './reducer';

interface ThemeContextProps {
  state: ThemeState;
  actions: {
    toggleTheme: () => void;
  };
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({
      type: `CHANGE_THEME`,
      payload: {
        theme: state.theme === `light` ? `dark` : `light`
      }
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        state,
        actions: {
          toggleTheme
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
