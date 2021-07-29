import { ADD_CONTROL_SUCCESS, ADD_CONTROL_LOADING, ADD_CONTROL_FAILED,
  DELETE_CONTROL_SUCCESS, DELETE_CONTROL_LOADING, DELETE_CONTROL_FAILED,
  GET_CONTROL_ME_SUCCESS, GET_CONTROL_ME_LOADING, GET_CONTROL_ME_FAILED, 
  GET_CONTROL_THEM_SUCCESS, GET_CONTROL_THEM_LOADING, GET_CONTROL_THEM_FAILED, 
  GET_CONTROL_LIST_ME, GET_CONTROL_LIST_THEM} from '../actionTypes';
import {auth} from '../../axios/axios';
import { message } from 'antd';

export const handleAddControlActionCreator = (performer_email, setIsModalVisible, setReload) => dispatch => {
  let action = 'update'
  if(performer_email) {
    dispatch({type: ADD_CONTROL_LOADING})
    auth.post('/users/me/shared_actions/', {performer_email,  action})
      .then(async () => {
        dispatch({type: ADD_CONTROL_SUCCESS})
        setReload(true)
        setIsModalVisible(false)
        await message.success('Вы успешно добавили пользователя!')
      })
      .catch(async (e) => {
        await message.error(e.response ? e.response.data.performer_email[0] : e.message)
        dispatch({type: ADD_CONTROL_FAILED})
      })
  }
  else message.error('Укажите пользователя!');
}

export const handleGetControlMeActionCreator = () => dispatch => {
  dispatch({type: GET_CONTROL_ME_LOADING})
  auth.get('/users/me/shared_actions/as_target/')
    .then(({data}) => {
      dispatch(getControlListMe(data))
      dispatch({type: GET_CONTROL_ME_SUCCESS})
    })
    .catch(e => {
      console.log(e)
      dispatch({type: GET_CONTROL_ME_FAILED})
    })
  }
  
export const handleDeleteControlActionCreator = (id, setReload) => dispatch => {
  dispatch({type: DELETE_CONTROL_LOADING})
  auth.delete(`/users/me/shared_actions/${id}/`)
    .then(async () => {
      dispatch({type: DELETE_CONTROL_SUCCESS})
      setReload(true)
      await message.success('Successfully deleted!')
    })
    .catch(async (e) => {
      console.log(e.response.data)
      dispatch({type: DELETE_CONTROL_FAILED})
      await message.error('An error occurred while trying to delete!')
    })
  }

export const handleGetControlThemActionCreator = () => dispatch => {
  dispatch({type: GET_CONTROL_THEM_LOADING})
  auth.get('/users/me/shared_actions/as_performer/')
    .then(({data}) => {
      dispatch(getControlListThem(data))
      dispatch({type: GET_CONTROL_THEM_SUCCESS})
    })
    .catch(e => {
      console.log(e)
      dispatch({type: GET_CONTROL_THEM_FAILED})
    })
  }

const getControlListMe = (accessControlListMe) => ({
  type: GET_CONTROL_LIST_ME,
  accessControlListMe
})

const getControlListThem = (accessControlListThem) => ({
  type: GET_CONTROL_LIST_THEM,
  accessControlListThem
})
