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
    if (this.props.authenticated == 1) {
      this.context.router.push('/courses');
      // this.context.router.push('/login');
    } else if(this.props.twitterret == 1) {
      this.props.actions.authenticationSuccess();
      this.context.router.push('/courses');
    }
  }

  // componentWillUpdate(){
  //   console.log('componentWillUpdate ' + (this.props.authenticated));
  //   if (this.props.authenticated == 1) {
  //     // this.context.router.push('/courses');
  //     // this.context.router.push('/login');
  //   } else if(this.props.twitterret == 1) {
  //     // this.props.actions.authenticationSuccess();
  //     // this.context.router.push('/courses');
  //   }
  // }

  render() {
    console.log("Twitter Ret in render(): " + this.props.twitterret);
    console.log("authenticated in render(): " + this.props.authenticated);
      return(
        <div>
          <h1>Please Login</h1>
          <a href="http://localhost:8888/" target="_self">Sign in with Twitter</a>
        </div>
      )
    // }
  }
}

//Pull in the React Router context so router is available on this.context.router.
Login.contextTypes = {
  router: PropTypes.object
};

// Login.PropTypes = {
//   twitterret: PropTypes.Integer
//   // actions: PropTypes.object.isRequired
  // authenticated: PropTypes.number.isRequired
// }

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
