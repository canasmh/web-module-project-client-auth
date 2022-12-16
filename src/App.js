import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link to="/">Login</Link>
        <Link to="/friends">Friends List</Link>
        <Link to="/friends/add">Add Friend</Link>
        <Link to="/logout">Logout</Link>
      </header>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/friends" element={<FriendsList />} />
          <Route exact path="/friends/add" element={<AddFriend />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
