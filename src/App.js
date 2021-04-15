import './App.css';
import { Navbar } from './components/Navbar';
import Products from './components/Products';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Orders } from './components/Orders';
import AddProduct from './components/AddProduct';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar></Navbar>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Products}></Route>
              <Route exact path='/orders' component={Orders}></Route>
              <Route exact path='/addProduct' component={AddProduct}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
