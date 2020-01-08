import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
@inject('store')
@observer
class Login extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <div className='login'>
            <button disabled={this.props.store.loading} className='btn btn-primary' onClick={()=> this.props.store.auth0.loginWithRedirect()}>
            {this.props.store.loading ? <i className="fa fa-gear fa-spin"/>: null}  Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;