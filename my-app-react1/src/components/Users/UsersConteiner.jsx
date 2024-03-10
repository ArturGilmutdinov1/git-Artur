import axios from 'axios';
import Users from './Users';

import React from 'react';
import { connect } from 'react-redux';

import { follow, setCurrentPage, setFetching, setTotalUsersCount, setUsers, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

class UsersApiComponent extends React.Component {

   componentDidMount() {
      this.props.setFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
         .then(response => {
            this.props.setFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   };

   onPageChanged = (pageNumbber) => {
      this.props.setFetching(true);
      this.props.setCurrentPage(pageNumbber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`)
         .then(
            response => {
               this.props.setFetching(false);
               this.props.setUsers(response.data.items)
            }
         )
   };

   render() {
      return <>
         {this.props.isFetching ? <Preloader />
            : <Users totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSizet}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               peopleDate={this.props.peopleDate}
               unfollow={this.props.unfollow}
               follow={this.props.follow.isFetching}
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
   }
};




export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   setFetching,
})(UsersApiComponent);

