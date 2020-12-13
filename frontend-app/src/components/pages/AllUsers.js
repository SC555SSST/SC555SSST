import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import userImg from 'components/user-2.png';
                                        
const {REACT_APP_REST_API_URL} = process.env


class AllUsers extends React.Component{
	
    constructor(){
        super();
        this.state = {
            users : []           
        }
    }



    async componentDidMount() {
        let {data : response} = await axios({
            method: 'get',
            url: REACT_APP_REST_API_URL + '/users',
        }).then((response) => {
            return response;
        }, (error) => {
            console.log(error);
        });
        let usersArr = response.data;
        this.setState({users: usersArr});


    }

	render(){
        
        const userProfiles = [];

        if(this.state.users.length >0){      
            this.state.users.map((row,index) => {                
                userProfiles.push(    
                                    <div className="user-profile-item col-md-6" key={index}>                                        
                                        <div className="row">
                                            <div className="col-md-2">
                                                <Link to={'/profile/'+row.id} className="profile-link dropdown-toggle">
                                                    <img src={userImg} className="user-image" alt="User Image"/>
                                                </Link>
                                                {/*
                                                <a href="#" className="profile-link dropdown-toggle">
                                                    <img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
                                                </a>
                                                */}
                                            </div>
                                            <div className="col-md-10">
                                                <span className="username"><Link to={'/profile/'+row.id}>{row.username} &nbsp;&nbsp;<span>({row.account_type})</span></Link></span>
                                                <div className="user-sub-title">{row.fullname}</div>
                                                <div className="user-points-div">
                                                    <span className="points">{row.points} Points</span>                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>);
            });
        }else{
            userProfiles.push([<h3>No results</h3>]);
        }


		return (
			<React.Fragment>
				
			          
				    <div className="btn-section-container clearfix">
                        <div className="pull-right">
                            <Link to="/ask-question" className="question-btn">Ask Question</Link>
                        </div>
                    </div>

                                                  

                    <div className="forum-section-container clearfix">
                        <div className="forum-title">
                            <div className="pull-right forum-desc">
                                <small>{this.state.users.length} Users</small>
                            </div>
                            <h3>All Users</h3>
                        </div>
                        
                        <div className="user-profile-items row">                         
                        	{userProfiles}        
                        </div>
                       
                    </div>

                    {/*
                    <div className="col-sm-12">
                        <div className="pagination-div pull-right clearfix">
                            <ul className="pagination">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                            </ul>
                        </div>
                    </div>
                    */}




			</React.Fragment>    
		)
	}
}


export default AllUsers;
