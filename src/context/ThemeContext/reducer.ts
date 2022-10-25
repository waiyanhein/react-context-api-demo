type Theme = 'light' | 'dark';
const getThemeHelpText = (theme: Theme): string =>
  theme === `dark` ? `Customise the Dark theme.` : `Customise the Light theme.`;

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
  theme: `light`,
  helpText: getThemeHelpText(`light`)
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
