const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
   users: [
      {
         id: 1,
         photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-d/6017882797.jpg',
         followed: false,
         fullName: 'Dmitry',
         status: 'I am a boss',
         location: { city: 'Minsk', country: 'Belarus' }
      }, {
         id: 2,
         photoUrl: 'https://cdn1.ozone.ru/s3/multimedia-d/6017882797.jpg',
         followed: true,
         fullName: 'Dmitry',
         status: 'I am a boss',
         location: { city: 'Minsk', country: 'Belarus' }
      },
   ],
}


const peopleReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: true };
               }
               return user;
            })
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false };
               }
               return user;
            })
         }
      case SET_USERS: {
         return { ...state, users: [...state.users, ...action.users] }
      }
      default:
         return state;
   }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })


export default peopleReducer;