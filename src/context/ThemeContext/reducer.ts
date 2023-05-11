type Theme = 'light' | 'dark';
const defaultTheme: Theme = `light`;
const getThemeHelpText = (theme: Theme): string =>
  theme === `dark` ? `Hello from the Dark Theme.` : `Hello from the Light Theme.`;

export type Action = {
  type: `CHANGE_THEME`;
  payload: {
    theme: Theme;
  };
};

export type ThemeState = {
  theme: Theme;
  helpText: string;
};

export const initialState: ThemeState = {
  theme: defaultTheme,
  helpText: getThemeHelpText(defaultTheme)
};

export const reducer = (state: ThemeState, action: Action): ThemeState => {
  switch (action.type) {
    case `CHANGE_THEME`: {
      return {
        ...state,
        theme: action.payload.theme,
        helpText: getThemeHelpText(action.payload.theme)
      };
    }
    // TODO: add more actions
  }

  return state;
};
