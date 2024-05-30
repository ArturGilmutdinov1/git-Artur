import { profileApi, usersApi } from "../API/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = ' SET_USER_PROFILE';
const SET_STATUS_PROFILE = ' SET_STATUS_PROFILE';
const SET_PHOTO_PROFILE = 'SET_PHOTO_PROFILE';

let initialState = {
   postData: [
      { id: 1, message: 'хехех', like: 1 },
      { id: 2, message: 'asdхех', like: 2 },
      { id: 3, message: 'adsasdad', like: 3 },
   ],
   newPostText: "",
   profile: null,
   status: "",
}


const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postData: [...state.postData, {
               id: 5,
               message: action.values,
               like: 0,
            }
            ],
         }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_STATUS_PROFILE: {
         return { ...state, status: action.status }
      }
      case SET_PHOTO_PROFILE: {
         return {
            ...state, profile: { ...state.profile, photos: action.photo }
         }
      }
      default:
         return state;
   }
}



export const addPostActionCreator = (values) => ({ type: ADD_POST, values });

const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS_PROFILE, status })
const setPhotoSuccess = (photo) => ({ type: SET_PHOTO_PROFILE, photo })


export const getUsersProfile = (userId) => async (dispatch) => {
   try {
      let response = await usersApi.getProfile(userId)
      dispatch(setUsersProfile(response.data))
   }
   catch (e) {
      alert(e)
   }
}

export const getStatusProfile = (userId) => async (dispatch) => {
   try {
      let response = await profileApi.getStatus(userId)
      dispatch(setStatus(response.data))
   }
   catch (e) {
      alert(e)
   }
}
export const updateStatusProfile = (status) => async (dispatch) => {
   try {
      let response = await profileApi.updateStatus(status)
      if (response.resultCode === 0) {
         dispatch(setStatus(status))
      }
   } catch (e) {
      alert(e)
   }
}

export const savePhoto = (photo) => async (dispatch) => {
   try {
      let response = await profileApi.savePhoto(photo);
      if (response.data.resultCode === 0) {
         dispatch(setPhotoSuccess(response.data.data.photos))
      }
   } catch (e) {
      alert(e)
   }
}


export const saveDataProfile = (profile) => async (dispatch, getState) => {

   const userID = getState().auth.userId;

   try {
      let response = await profileApi.saveData(profile);
      if (response.data.resultCode === 0) {
         dispatch(getUsersProfile(userID))
      }
   } catch (e) {
      alert(e)
   }

}



export default profileReducer
