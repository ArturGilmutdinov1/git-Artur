import Users from './Users';

import React from 'react';
import { connect } from 'react-redux';

import { follow, getUsers, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';



class UsersApiComponent extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   };

   onPageChanged = (pageNumbber) => {
      this.props.getUsers(pageNumbber, this.props.pageSize);
   };

   render() {
      debugger
      return <>
         {this.props.isFetching ? <Preloader />
            : <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               peopleDate={this.props.peopleDate}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               followingInProgress={this.props.followingInProgress}
            />
         }

      </>
   };
};
const mapStateToProps = (state) => {
   return {
      peopleDate: state.friendsPage.users,
      pageSize: state.friendsPage.pageSize,
      totalUserCount: state.friendsPage.totalUserCount,
      currentPage: state.friendsPage.currentPage,
      isFetching: state.friendsPage.isFetching,
      followingInProgress: state.friendsPage.followingInProgress,
   }
};




export default connect(mapStateToProps, {
   follow,
   unfollow,
   getUsers,
})(UsersApiComponent);

