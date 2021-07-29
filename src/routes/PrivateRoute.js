import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({children, ...rest}) => {
  const {isLog, failed} = useSelector(state => ({
    isLog: state.profile.isLog,
    // loading: state.profile.get.loading,
    failed: state.profile.get.failed,
  }))

  function render() {
    return isLog ? (children) : failed ? (<Redirect to={'/'}/>) : null
  }

  return <Route{...rest} render={render}/>;
}

export default PrivateRoute;