import React from 'react';
import { Link } from "react-router-dom";

                                        



class AllUsers extends React.Component{
	

	render(){

		const userProfiles = [];
        
        for (let i = 0; i <= 15; i++) {
            
            userProfiles.push(		
								<div className="user-profile-item col-md-6" key={i}>                                        
		                            <div className="row">
		                                <div className="col-md-2">
                                            <Link to="/profile" className="profile-link dropdown-toggle">
                                                <img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
                                            </Link>
		                                    {/*
                                            <a href="#" className="profile-link dropdown-toggle">
		                                        <img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
		                                    </a>
                                            */}
		                                </div>
		                                <div className="col-md-10">
		                                    <span className="username"><Link to="/profile">Alexander Pierce</Link></span>
		                                    <div className="user-sub-title">Various versions have evolved over the years, sometimes by accident</div>
		                                    <div className="user-points-div">
		                                        <span className="points">1516 Points</span>                                                
		                                    </div>
		                                </div>
		                            </div>
		                        </div>);
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
                                <small>1,309,625 results</small>
                            </div>
                            <h3>All Users</h3>
                        </div>
                        
                        <div className="user-profile-items row">                         
                        	{userProfiles}        
                        </div>
                       
                    </div>

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




			</React.Fragment>    
		)
	}
}


export default AllUsers;
