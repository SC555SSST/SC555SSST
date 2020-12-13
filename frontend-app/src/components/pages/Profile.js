import React from 'react';

import { Link } from "react-router-dom";


import axios from 'axios';
import userImg from 'components/user-2.png';

const {REACT_APP_REST_API_URL} = process.env




class Profile extends React.Component{
	
    constructor(){
        super();
        this.state = {
            userDetails : {},
        }
    }



    async componentDidMount() {
         
        let user_Id = parseInt(this.props.match.params.userId)
        console.log(user_Id);
        if(!isNaN(user_Id)) {

            let {data : response} = await axios({
                method: 'get',
                url: REACT_APP_REST_API_URL + '/users/'+ user_Id,
            }).then((response) => {
                return response;
            }, (error) => {
                console.log(error);
            });

            console.log(response);
            this.setState({userDetails: response.data});            
        }
    }


    render(){
		return (
		<React.Fragment>		
		    
            <div className="forum-section-container clearfix">                 
                 <div className="row tbl-container">
                    <div className="col-md-12">

                        <div className="forum-title">
                            <h3>User123</h3>
                        </div>

                        <div className="btn-section-container clearfix">
                            <div className="pull-right">
                                <Link to="/edit-user-profile" className="question-btn">Edit</Link>
                                {/*<a href="" className="question-btn">Edit</a>*/}
                            </div>
                        </div>
                        
                        <div className="row tbl-container user_profile_details_container">
                            
                            <div className="col-md-3 col-sm-3 mb-30 user_profile_image">
                                <img className="img-responsive" src={userImg} alt=""/>
                            </div>
                            <div className="col-md-9 col-sm-9 user_profile_details">                                        
                                <table id="" className="table table-striped table-bordered dt-responsive nowrap">
                                    <tbody>
                                        <tr>
                                            <td>Full name</td>
                                            <td>{this.state.userDetails.fullname}</td>                              
                                        </tr>
                                        <tr>
                                            <td>Username</td>
                                            <td>{this.state.userDetails.username}</td>                              
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>{this.state.userDetails.gender}</td>                              
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{this.state.userDetails.email}</td>                              
                                        </tr>
                                        <tr>
                                            <td>User account type</td>
                                            <td>{this.state.userDetails.account_type}</td>                              
                                        </tr>
                                        <tr>
                                            <td>User badge</td>
                                            <td>{this.state.userDetails.badge}</td>                              
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        
                    </div>
                </div>
            </div>

		</React.Fragment>    
		)
	}
}


export default Profile;
