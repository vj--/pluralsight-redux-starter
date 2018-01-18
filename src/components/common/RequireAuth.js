import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    // static contextTypes = {
    //   router: React.PropTypes.object,
    // }

    componentWillMount() {
      console.log('componentWillMount ' + this.props.authenticated);//(this.props.authenticated ? "true" : "false"));
      if (this.props.authenticated != 1) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      console.log('componentWillUpdate' + this.props.authenticated);
      if (nextProps.authenticated != 1) {
        // this.context.router.push('/courses');
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  // Authentication.propTypes = {
  //   authenticated: PropTypes.boolean
  // };


  //Pull in the React Router context so router is available on this.context.router.
  Authentication.contextTypes = {
    router: PropTypes.object
  };

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
