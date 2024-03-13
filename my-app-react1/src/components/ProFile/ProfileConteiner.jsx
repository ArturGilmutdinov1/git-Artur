import React from "react"
import ProFile from "./ProFile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import axios from "axios";
import { useParams } from 'react-router-dom';


function withRouter(Children) {
   return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}



class ProfileContainer extends React.Component {
   componentDidMount() {

      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2;
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const WhitsUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WhitsUrlContainerComponent);