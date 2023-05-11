import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';
import { Tasks } from './containers/Tasks';
import Navigation from './components/Navigation';
import './resources/styles/app.scss';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className={'app'}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
