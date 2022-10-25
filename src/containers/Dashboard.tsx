import React from 'react';
import Panel from '../components/Panel';
import { useThemeContext } from '../context/ThemeContext';
import Text from '../components/Text';

const Dashboard = (): JSX.Element => {
  const { state: themeState } = useThemeContext();

  return (
    <div className={`content ${themeState.theme}`}>
      <h1>
        <Text>Dashboard</Text>
      </h1>
      <Panel>
        <p>{themeState.helpText}</p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci amet aperiam cumque
        distinctio ducimus fugit harum, id ipsum itaque nesciunt quasi quos, reiciendis repudiandae
        totam velit veritatis vitae voluptas.
      </Panel>
    </div>
  );
};

export default Dashboard;
