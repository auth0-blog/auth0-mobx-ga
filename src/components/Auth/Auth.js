import createAuth0Client from '@auth0/auth0-spa-js';
import {Component} from 'react';
import {inject } from 'mobx-react';
@inject('store')
class Auth extends Component{
  async componentWillMount(){
      let auth0 = await createAuth0Client({
        domain: 'AUTH0_DOMAIN',
        client_id: 'AUTH0_CLIENT_ID',
        redirect_uri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
    });
    this.props.store.initialize(auth0);
    this.props.store.setLoader(false);
  }
  render(){
    return(null);
  }
}
export default Auth;