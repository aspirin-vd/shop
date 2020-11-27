import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGOUT_USER } from '../types';

const userRequested = () => { return { type: FETCH_USER_REQUEST }; };
const userLoaded = (newUserData) => { return { type: FETCH_USER_SUCCESS, newUserData }; };
const userError = (error) => { return { type: FETCH_USER_FAILURE, payload: error }; };
const logoutUser = () => {
  localStorage.removeItem('access_token');
  return { type: LOGOUT_USER };
};

const fetchRegister = (generalService) => (userData) => (dispatch) => {
  let cancelled = false;
  dispatch(userRequested());
  generalService.postRegister(userData).then((data) => {
    if (!cancelled) {
      localStorage.setItem('access_token', data.jwt);
      dispatch(userLoaded(data.results));
    }
  }).catch((err) => !cancelled && dispatch(userError(err)));
  return () => cancelled = true;
};
const fetchLogin = (generalService) => (userData) => (dispatch) => {
  let cancelled = false;
  dispatch(userRequested());
  generalService.postLogin(userData).then((data) => {
    if (!cancelled) {
      localStorage.setItem('access_token', data.jwt);
      dispatch(userLoaded(data.results));
    }
  }).catch((err) => !cancelled && dispatch(userError(err)));
};
const fetchUser = (generalService) => () => (dispatch) => {
  const token = localStorage.access_token;
  let cancelled = false;

  dispatch(userRequested());
  if (token) generalService.getUser(token).then((data) => {
    if (!cancelled)
      if (data.message) {
        dispatch(userError(data.message));
        localStorage.removeItem('access_token');
      } else dispatch(userLoaded(data.results));
  }).catch((err) => {
    if (!cancelled) {
      dispatch(userError(err));
      localStorage.removeItem('access_token');
    }
  });
  else dispatch(userError('Authorisation Error'));
};
const fetchProfile = (generalService) => (userData) => (dispatch) => {
  const token = localStorage.access_token;
  let cancelled = false;

  dispatch(userRequested());
  if (token) generalService.postProfile(token, userData).then((data) => {
    if (!cancelled)
      if (data.message) {
        dispatch(userError(data.message));
        localStorage.removeItem('access_token');
      } else dispatch(userLoaded(data.results));
  }).catch((err) => {
    if (!cancelled) {
      dispatch(userError(err));
      localStorage.removeItem('access_token');
    }
  });
  else dispatch(userError('Authorisation Error'));
};

const fetchPassword = (generalService) => (userData) => (dispatch) => {
  const token = localStorage.access_token;
  let cancelled = false;

  dispatch(userRequested());
  if (token) generalService.postPassword(token, userData).then((data) => {
    if (!cancelled)
      if (data.message) {
        dispatch(userError(data.message));
        localStorage.removeItem('access_token');
      } else {
        localStorage.setItem('access_token', data.jwt);
        dispatch(userLoaded(data.results));
      }
  }).catch((err) => {
    if (!cancelled) {
      dispatch(userError(err));
      localStorage.removeItem('access_token');
    }
  });
  else dispatch(userError('Authorisation Error'));
};

export {
  logoutUser,

  fetchRegister,
  fetchLogin,
  fetchUser,
  fetchProfile,
  fetchPassword,
};
