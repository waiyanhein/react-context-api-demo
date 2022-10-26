import React from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';
import Text from '../components/Text';
import { useThemeContext } from '../context/ThemeContext';

const Settings = (): JSX.Element => {
  const { state: themeState, actions: themeActions } = useThemeContext();

  return (
    <div className={`content ${themeState.theme}`}>
      <h1>
        <Text>Settings</Text>
      </h1>
      <Panel>
        <p>{themeState.helpText}</p>
        Change the settings
      </Panel>
      <Button onClick={themeActions.toggleTheme}>
        {themeState.theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </Button>
    </div>
  );
};

export default Settings;
