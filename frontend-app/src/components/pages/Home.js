import React from 'react';
import { Link } from "react-router-dom";



class Home extends React.Component{
	render(){
        
        const forumItems = [];
        
        for (let i = 0; i <= 15; i++) {
            let cls = (i%2==0)?'active':''
            forumItems.push(
                            <div className={"forum-item " + cls}  key={i}>
                                <div className="row">
                                    
                                    <div className="col-md-1 forum-info">
                                        <span className="views-number">345</span>
                                        <div>
                                            <small>Answers</small>
                                        </div>
                                    </div>

                                    <div className="col-md-8 no-left-padding">                                        
                                        <Link to="/thread" className="forum-item-title">Announcements</Link>
                                        <div className="forum-sub-title">New to the community? music, movies, your favorite talk about enythingPlease stop by, say hi and tell us a bit about yourself.</div>
                                        <div className="forum-category">
                                            <Link to="/category">Rice</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-3 forum-item-author">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Link to="/profile" className="profile-link dropdown-toggle">
                                                    <img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
                                                </Link>
                                            </div>

                                            <div className="col-md-9">
                                                <span className="username"><Link to="/profile">John Alex</Link></span>
                                                <div className="user-points-div">
                                                    <span className="points">1516 Points</span>                                                
                                                </div>
                                            </div>
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
                            <small>Total posts: 320,800</small>
                        </div>
                        <h3>General subjects</h3>
                    </div>
                    
                    <div className="forum-items">
                        

                        <div className="forum-item active">
                            <div className="row">
                                <div className="col-sm-2 col-md-1 forum-info">
                                    <span className="views-number">1216</span>
                                    <div>
                                        <small>Answers</small>
                                    </div>
                                </div>
                                <div className="col-sm-10 col-md-8 no-left-padding">                                        
                                    <a href="forum_post.html" className="forum-item-title">General Discussion</a>
                                    <div className="forum-sub-title">Talk about sports, entertainment, music, movies, your favorite color, talk about enything.music, movies, your favorite color, talk about enything</div>
                                    <div className="forum-category"><a href="">Vegetables</a></div>
                                </div>
                                
                                <div className="col-sm-12 col-md-3 forum-item-author">
                                    {/*<div className="forum-icon">
                                        <i className="fa fa-bolt"></i>
                                    </div>*/}

                                    <div className="row">
                                        <div className="col-sm-12 col-md-3">
                                            <a href="#" className="profile-link dropdown-toggle" data-toggle="dropdown">
                                                <img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
                                            </a>
                                        </div>

                                        <div className="col-sm-12 col-md-9">
                                            <span className="username"><a href="">Alexander Pierce</a></span>
                                            <div className="user-points-div">
                                                <span className="points">1516 Points</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 


                        <div className="forum-item">
                            <div className="row">
                                <div className="col-md-1 forum-info">
                                    <span className="views-number">345</span>
                                    <div>
                                        <small>Answers</small>
                                    </div>
                                </div>
                                <div className="col-md-8 no-left-padding">                                        
                                    <a href="forum_post.html" className="forum-item-title">Introductions</a>
                                    <div className="forum-sub-title">New to the community? music, movies, your favorite color, talk about enything Please stop by, say hi and tell us a bit about yourself.</div>
                                    <div className="forum-category"><a href="">Rice</a></div>
                                </div>
                                
                                <div className="col-md-3 forum-item-author">
                                    
                                    {/*<div className="forum-icon">
                                        <i className="fa fa-bolt"></i>
                                    </div>*/}

                                    <div className="row">
                                        <div className="col-md-3">
                                            <a href="#" className="profile-link dropdown-toggle" data-toggle="dropdown">
                                                <img src="img/user-images/user-2.png" className="user-image" alt="User Image" />
                                            </a>
                                        </div>

                                        <div className="col-md-9">
                                            <span className="username"><a href="">John Alex</a></span>
                                            <div className="user-points-div">
                                                <span className="points">1516 Points</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="forum-item active">
                            <div className="row">
                                <div className="col-md-1 forum-info">
                                    <span className="views-number">1216</span>
                                    <div>
                                        <small>Answers</small>
                                    </div>
                                </div>
                                <div className="col-md-8 no-left-padding">                                        
                                    <a href="forum_post.html" className="forum-item-title">Introductions</a>
                                    <div className="forum-sub-title">Talk about sports, entertainment, music, movies, your favorite color, talk about enything.</div>
                                    <div className="forum-category"><a href="">Vegetables</a></div>
                                </div>
                                
                                <div className="col-md-3 forum-item-author">
                                    {/*<div className="forum-icon">
                                        <i className="fa fa-bolt"></i>
                                    </div>*/}

                                    <div className="row">
                                        <div className="col-md-3">
                                            <a href="#" className="profile-link dropdown-toggle" data-toggle="dropdown">
                                                <img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
                                            </a>
                                        </div>

                                        <div className="col-md-9">
                                            <span className="username"><a href="">Alexander Pierce</a></span>
                                            <div className="user-points-div">
                                                <span className="points">1516 Points</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="forum-item">
                            <div className="row">
                                <div className="col-md-1 forum-info">
                                    <span className="views-number">345</span>
                                    <div>
                                        <small>Answers</small>
                                    </div>
                                </div>
                                <div className="col-md-8 no-left-padding">                                        
                                    <a href="forum_post.html" className="forum-item-title">Announcements</a>
                                    <div className="forum-sub-title">New to the community? music, movies, your favorite talk about enythingPlease stop by, say hi and tell us a bit about yourself.</div>
                                    <div className="forum-category"><a href="">Rice</a></div>
                                </div>
                                
                                <div className="col-md-3 forum-item-author">
                                    {/*                                        
                                    <div className="forum-icon">
                                        <i className="fa fa-bolt"></i>
                                    </div>*/}

                                    <div className="row">
                                        <div className="col-md-3">
                                            <a href="#" className="profile-link dropdown-toggle" data-toggle="dropdown">
                                                <img src="img/user-images/user-2.png" className="user-image" alt="User Image"/>
                                            </a>
                                        </div>

                                        <div className="col-md-9">
                                            <span className="username"><a href="">John Alex</a></span>
                                            <div className="user-points-div">
                                                <span className="points">1516 Points</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="cat-page-link-container pull-right">
                        <a href="" className="">View more >> </a>
                    </div>
                </div>                                     

                <div className="forum-section-container clearfix">
                    <div className="forum-title">
                        <div className="pull-right forum-desc">
                            <small>Total posts: 17,800,600</small>
                        </div>
                        <h3>Other subjects</h3>
                    </div>
                    
                    <div className="forum-items">    
                        {forumItems}
                    </div>

                    <div className="cat-page-link-container pull-right">
                        <a href="" className="">View more >> </a>
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


export default Home;
