import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Link
} from 'react-router-dom';
import './App.scss';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul className={'navigation'}>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
