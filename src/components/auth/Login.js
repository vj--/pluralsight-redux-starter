import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import {browserHistory} from 'react-router';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  redirectForOauth(){
     location.href="http://google.ca"
  }

  render() {
    return (
      <div>
      <h1>Please Login</h1>
      <a href="http://localhost:8888/" target="_self">Sign in with Twitter</a>
      </div>
    );
  }
}

Login.PropTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    token: state.oauthToken
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
