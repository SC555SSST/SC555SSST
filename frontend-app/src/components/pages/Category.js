import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import userImg from 'components/user-2.png';

const {REACT_APP_REST_API_URL} = process.env

class Category extends React.Component{
	
    constructor(){
        super();
        this.state = {
            categoryId : null,
            categoryName: '',
            threads     : []
        }
    }



    async componentDidMount() {
         
        let catId = parseInt(this.props.match.params.catId)
        
        if(!isNaN(catId)) {

            let ctName = await this.getCategoryInfo(catId);
            let threadArrNew  = await this.getThreads(catId);

            this.setState({
                categoryName: ctName,
                categoryId: catId, 
                threads: threadArrNew
            });
            
        }
    }

    async componentDidUpdate(prevProps, prevState) {       
               
        let catId = parseInt(this.props.match.params.catId);
        let catName = this.props.location.category_name
        console.log('catId -' + catId);
        console.log('catName - ' + catName);
        

        if ((this.state.categoryId !== catId)) {
            console.log('=== Ajax  ===')
            
            if(isNaN(catId)) {
                
                this.setState({
                    categoryName: '',
                    categoryId: catId, 
                    threads: []
                });

            }else{

                let categoryNew   = await this.getCategoryInfo(catId);
                let threadArrNew  = await this.getThreads(catId);
                
                this.setState({
                    categoryName: categoryNew,
                    categoryId: catId, 
                    threads: threadArrNew
                }); 
            }
        }

        console.log('catName - ');       
        
    }

    getCategoryInfo = async(id) => {        
        let {data : response} = await axios({
            method: 'get',
            url: REACT_APP_REST_API_URL + '/categories/'+ id,
        }).then((response) => {
            return response;
        }, (error) => {
            console.log(error);
        });
        return response.data.category_name;
    }

    getThreads = async(id) => {
        
        let {data : responseData} = await axios({
            method: 'get',
            url: REACT_APP_REST_API_URL + '/categories/'+ id +'/threads',
        }).then((response) => {
           return response;
        }, (error) => {
            console.log(error);
        });
        
        return responseData.data;      
    }

   

    render(){

        const forumItems = [];        
        let pageHeading= this.state.categoryName;
        let threadCount = this.state.threads.length

        if(this.state.threads.length >0){

            let cls = '';
               
            this.state.threads.map((row,index) => {    
                
                cls = (cls=='')?'active':''
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
                                                    return (<div className="forum-category" key={ctindex}><Link to={'/category/'+ctRecord.id}>{ctRecord.category_name}</Link></div>)
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
                            <small>Total threads: {threadCount}</small>
                        </div>
                        <h3>{pageHeading}</h3>
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


export default Category;
