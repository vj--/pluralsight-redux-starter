// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../actions/authActions';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
          authenticated={this.props.authenticated}
          logout={this.props.actions.doLogout}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  // authenticated: PropTypes.number.isRequired,
  // actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    authenticated: state.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
