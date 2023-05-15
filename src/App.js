import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer'; // Import the Foote component
import ContactUs from './components/ContactUs';
import ResetPassword from './components/ResetPassword';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/reset-password" component={ResetPassword} />
        </Switch>
        <ContactUs /> {/* Include the contactus component */}
        <Footer /> {/* Include the Footer coomponent */}
      </div>
    </Router>
  );
};

export default App;
