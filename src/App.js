import React, { Component } from 'react';
import Product from './components/Product';
import { Provider } from 'mobx-react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Store from './Store';
import { decorate, observable, action } from 'mobx';
import './App.css';
import Login from "./components/Auth/Login";
import Auth from './components/Auth/Auth';
import Callback from "./callback/Callback";

decorate(Store, {
  products: observable,
  addToCart: action,
  increaseQuantityInCart: action,
  decreaseQuantityInCart: action,
  removeFromCart: action,
  currentCart: observable,
  loading: observable
});
const shoppingStore = new Store();
class App extends Component {
  render() {
    return (
      <Provider store={shoppingStore}>
        <Auth />
        <div className='container'>
          <Route
            exact
            path='/callback'
              render={() => <Callback auth={this.props.auth} />}
          />
          <Route
            exact
            path='/'
            render={() => (
              <Product
                history={this.props.history}
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={() => <Login auth={this.props.auth} />}
          />
        </div>
      </Provider>
    );
  }
}
export default withRouter(App);