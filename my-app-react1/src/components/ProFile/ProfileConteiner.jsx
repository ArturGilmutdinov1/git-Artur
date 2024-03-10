import React from "react"
import ProFile from "./ProFile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import axios from "axios";

class ProfileContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(response => {
            this.props.setUserProfile(response.data)
         })


   }

   render() {
      return (
         <ProFile {... this.props} profile={this.props.profile} />
      )
   }

}

let mapStateToProps = (state) => ({
   profile: state.profillePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);