
import { connect } from 'react-redux';
import Friends from './Friends';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/peopleReducer';

const mapStateToProps = (state) => {
   return {
      peopleDate: state.friendsPage.users
   }
};
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users))
      },
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(Friends);

