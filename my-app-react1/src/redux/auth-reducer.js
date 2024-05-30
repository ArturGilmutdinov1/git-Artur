import { autApi } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = " SET_CAPTCHA"

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   CaptchaURL: null,
}


const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...action,
            ...action.data,
         }
      case SET_CAPTCHA:
         return {
            ...action, CaptchaURL: action.Captcha,
         }
      default:
         return state;
   }
}


const setAuthUsersData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
const setCaptchaURL = (Captcha) => ({ type: SET_CAPTCHA, Captcha });

export const getAuthUsersData = () => async (dispatch) => {
   try {
      let response = await autApi.me();
      if (response.data.resultCode === 0) {
         let { id, login, email } = response.data.data;
         dispatch(setAuthUsersData(id, email, login, true))
      }
   } catch (error) {
      alert(error)
   }
}

export const login = (mail, password, rememberMe, captcha) => async (dispatch) => {
   try {
      let response = await autApi.login(mail, password, rememberMe, captcha)
      if (response.data.resultCode === 0) {

         dispatch(getAuthUsersData())
      }
      else if (response.data.resultCode === 10) {
         debugger
         dispatch(getCaptchaURL());
      }
   } catch (error) {
      alert(error)
   }
}
export const logout = () => async (dispatch) => {
   let response = await autApi.logout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUsersData(null, null, null, false))
   }
}

export const getCaptchaURL = () => async (dispatch) => {
   let response = await autApi.getCaptcha()
   dispatch(setCaptchaURL(response.data.url))
}

export default authReducer;
