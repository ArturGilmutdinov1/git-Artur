import axios from 'axios';
import Users from './Users';

import React from 'react';
import { connect } from 'react-redux';

import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountAC, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';

class UsersApiComponent extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   };

   onPageChanged = (pageNumbber) => {
      this.props.setCurrentPage(pageNumbber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
         .then(response => { this.props.setUsers(response.data.items) })
   };

   render() {
      return <Users totalUserCount={this.props.totalUserCount}
         pageSize={this.props.pageSizet}
         currentPage={this.props.currentPage}
         onPageChanged={this.onPageChanged}
         peopleDate={this.props.peopleDate}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
      />
   };
};
const mapStateToProps = (state) => {
   return {
      peopleDate: state.friendsPage.users,
      pageSize: state.friendsPage.pageSize,
      totalUserCount: state.friendsPage.totalUserCount,
      currentPage: state.friendsPage.currentPage,
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
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageActionCreator(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      }
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

