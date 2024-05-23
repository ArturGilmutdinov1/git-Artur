import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { compose } from "redux";
import { witchAuthRedirect } from "../../hoc/witchAuthRedirect";
import { getUsersProfile, saveDataProfile, savePhoto } from "../../redux/profileReducer";
import { getStatusProfile, updateStatusProfile } from './../../redux/profileReducer';
import ProFile from "./ProFile";


function withRouter(Children) {
   return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}



class ProfileContainer extends React.Component {
   refreshPropfile() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserID;
         if (!userId) {
            this.props.history.push("/login");
         }
      }
      this.props.getUsersProfile(userId);
      this.props.getStatusProfile(userId);
   }

   componentDidMount() {
      this.refreshPropfile();
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshPropfile();
      }
   }

   render() {
      return (
         <ProFile {... this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatusProfile}
            owner={this.props.match.params.userId}
            savePhoto={this.props.savePhoto}
            saveDataProfile={this.props.saveDataProfile}
         />
      )
   }

}



let mapStateToProps = (state) => ({
   profile: state.profillePage.profile,
   status: state.profillePage.status,
   authorizedUserID: state.auth.userId,
})



export default compose(
   connect(mapStateToProps, { getUsersProfile, getStatusProfile, updateStatusProfile, savePhoto, saveDataProfile }),
   withRouter,
   witchAuthRedirect,
)(ProfileContainer)