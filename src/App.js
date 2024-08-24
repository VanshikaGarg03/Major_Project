// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Cart from './components/Cart';
import Order from './components/Order';
import AdminDashboard from './components/AdminDashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/product/:id" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/order" component={Order} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default App;

