import React from "react";
import { connect } from "react-redux";
import { getAuthUsersData, logout } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderConteiner extends React.Component {
   componentDidMount() {
      this.props.getAuthUsersData();
   }

   render() {
      return <Header {...this.props} />
   }
}


const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUsersData, logout })(HeaderConteiner);