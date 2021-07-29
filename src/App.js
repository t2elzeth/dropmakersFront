import React, {useEffect, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileActionCreator } from './store/actions/profile';
import { GET_PROFILE_FAILED } from './store/actionTypes';


import 'antd/dist/antd.css';
import './assets/styles/styles.scss';
import privateRoutes from "./privateRoutes";

import { MainPage, ActivatePage } from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';


const App = () => {
  const {isLog, theme} = useSelector( state => ({
    isLog: state.profile.isLog,
    theme: state.themeSwitcher.theme
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) dispatch(handleProfileActionCreator())
    else dispatch({ type: GET_PROFILE_FAILED })
  }, [isLog, dispatch])

  return (
    <BrowserRouter>
      <Suspense
        fallback={<div className={`fallback ${theme === 'dark' ? 'fallback-dark' : 'fallback-light'}`}></div>}
      >
        <Switch>
          <Route path="/activation/:uid/:token" component={ActivatePage} exact/>
          {
            privateRoutes.map(route => (
            <PrivateRoute exact path={route.path} key={route.path}>
              {route.component}
            </PrivateRoute>
            ))
          }
        </Switch>
      </Suspense>
      <Suspense
        fallback={<div className={`fallback ${theme === 'dark' ? 'fallback-dark' : 'fallback-light'}`}>Добро пожаловать в DropMakers</div>}
      >
        <Switch>
          <Route path='/' component={MainPage} exact/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App


