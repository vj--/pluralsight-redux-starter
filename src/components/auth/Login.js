import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import {browserHistory} from 'react-router';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    console.log('componentWillMount ' + (this.props.authenticated));
    if (this.props.twitterret == 1 || this.props.authenticated == 1) {
      this.props.actions.authenticationSuccess();
      browserHistory.push('/courses');
      // this.context.router.push('/login');
    }
  }

  render() {
    console.log("Twitter Ret in render(): " + this.props.twitterret);
    console.log("Twitter Ret in render(): " + this.props.authenticated);
      return(
        <div>
          <h1>Please Login</h1>
          <a href="http://localhost:8888/" target="_self">Sign in with Twitter</a>
        </div>
      )
    // }
  }
}

Login.PropTypes = {
  twitterret: PropTypes.Integer,
  actions: PropTypes.object.isRequired,
  authenticated: PropTypes.number
}

function mapStateToProps(state, ownProps) {
  // authenticated will be 1 for success,
  const twitterVal = ownProps.params.authenticated;

  return {
    twitterret: twitterVal,
    token: state.oauthToken,
    authenticated: state.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
