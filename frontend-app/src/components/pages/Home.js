import React from 'react';
import { Link } from "react-router-dom";

import userImg from 'components/user-2.png';
import axios from 'axios';


const {REACT_APP_REST_API_URL} = process.env


class Home extends React.Component{
	
    
    constructor(props) {
        super(props)
        this.answerFormRef = React.createRef();
        this.state = {
            threads : []
        }
    }

    
    async componentDidMount() {
        

        let {data:response} = await axios({
            method: 'get',
            url: REACT_APP_REST_API_URL + '/threads',
        }).then((response) => {
            return response;
        }, (error) => {
            console.log(error);
        });
        console.log(response);
        this.setState({threads: response.data});
        /**/
    }



    render(){
        const forumItems = [];
        
        if(this.state.threads.length >0){
            
            let cls = '';
            this.state.threads.map((row,index) => {
                
                cls = (cls=='')?'active':'';
                forumItems.push(
                                <div className={"forum-item " + cls}  key={index}>
                                    <div className="row">
                                        
                                        <div className="col-md-1 forum-info">
                                            <span className="views-number">{row.postCount}</span>
                                            <div>
                                                <small>Answers</small>
                                            </div>
                                        </div>

                                        <div className="col-md-8 no-left-padding">                                        
                                            <Link to={'/thread/'+ row.id} className="forum-item-title">{row.title}</Link>
                                            <div className="forum-sub-title">{row.text}</div>
                                            {
                                                row.categories.map((ctRecord,ctindex) => {
                                                    return (<div className="forum-category" key={ctindex}>
                                                                <Link to={'/category/'+ctRecord.id}>{ctRecord.category_name}</Link>
                                                            </div>)
                                                })
                                            }
                                        </div>
                                                                                
                                        <div className="col-md-3 forum-item-author">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <Link to={'/profile/' + row.user.id} className="profile-link dropdown-toggle">
                                                        <img src={userImg} className="user-image" alt="User Image"/>
                                                    </Link>
                                                </div>

                                                <div className="col-md-9">
                                                    <span className="username"><Link to={'/profile/' + row.user.id}>{row.user.username}</Link></span>
                                                    <div className="user-points-div">
                                                        <span className="points">{row.user.points} Points</span>                                                
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>);
            });

        }else{
            
            forumItems.push([<h3>No results</h3>]);
        }
        

        const forumItems1 = [];
        
        for (let i = 0; i <= 15; i++) {
            let cls = (i%2==0)?'active':''
            forumItems1.push(
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
                                                    <img src={userImg} className="user-image" alt="User Image"/>
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
                            <small>Total Threads: {this.state.threads.length}</small>
                        </div>
                        <h3>Questions</h3>
                    </div>
                    
                    <div className="forum-items">    
                        {forumItems}
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


export default Home;
