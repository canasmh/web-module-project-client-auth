import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Login = () => {
  return (<h2>Login</h2>);
}

const FriendsList = () => {
  return (<h2>Friends List</h2>);
}

const AddFriend = () => {
  return (<h2>Add Friend</h2>);
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/friends" element={<FriendsList />} />
          <Route exact path="/friends/add" element={<AddFriend />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
