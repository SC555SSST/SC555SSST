import React from 'react';

import { Link } from "react-router-dom";
import userImg from 'components/user-2.png';
import axios from 'axios';



const {REACT_APP_REST_API_URL} = process.env


class Thread extends React.Component{
	
    constructor(props) {
        super(props)
        this.answerFormRef = React.createRef();
        this.state = {


            threadPosts:[
                {
                    "id": 70,
                    "post_text": "Duchess's knee, while plates and dishes crashed around it--once more the pig-baby was sneezing on the end of trials, \"There was some attempts at applause, which was sitting on the floor, and a large one, but it all is! I'll try and repeat \"'TIS THE VOICE OF THE SLUGGARD,\"' said the Caterpillar. 'I'm afraid I've offended it again!' For the Mouse only growled in reply. 'That's right!' shouted the Queen, who was passing at the top.",
                    "is_useful": 1,
                    "user": {
                        "id": 2,
                        "username": "saman",
                        "points": 0,
                        "account_type": "admin"
                    }
                },
                {
                    "id": 74,
                    "post_text": "And oh, I wish I hadn't mentioned Dinah!' she said this, she came suddenly upon an open.",
                    "is_useful": 0,
                    "user": {
                        "id": 3,
                        "username": "batman",
                        "points": 102,
                        "account_type": "farmer"
                    }
                }
            ],



            //
            threadQuestion : {
                    "id": 1,
                    "title": "water One More Doubt. I Was Trying To Put",
                    "text": "Thank you for replying, it is working now. I have one more doubt. I was trying to put a checkmark when we press the elements of the list is pressed",
                    "user": {
                        "id": 3,
                        "username": "batman",
                        "points": 102,
                        "account_type": "farmer"
                    },
                    "categories": [
                        {
                            "id": 1,
                            "category_name": "Rice"
                        },
                        {
                            "id": 6,
                            "category_name": "Animals"
                        },
                        {
                            "id": 5,
                            "category_name": "Machines"
                        },
                        {
                            "id": 2,
                            "category_name": "Fruits"
                        },
                        {
                            "id": 3,
                            "category_name": "Water"
                        },
                        {
                            "id": 4,
                            "category_name": "Vegetables"
                        }
                    ]
                }


        }
    }






    async componentDidMount() {
         
        let threadId = parseInt(this.props.match.params.threadId)
        console.log(threadId);
        
        if(!isNaN(threadId)) {

            let thQuestion          = await this.getThreadQuestion(threadId);
            let thPosts    = await this.getThreadPosts(threadId);

            this.setState({threadPosts: thPosts,threadQuestion: thQuestion});
            
        }
    }


    getThreadQuestion = async(id) => {
        
        let {data : responseData} = await axios({
            method: 'get',
            url: REACT_APP_REST_API_URL + '/threads/'+ id,
        }).then((response) => {
           return response;
        }, (error) => {
            console.log(error);
        });        
        return responseData.data;      
    }
    
    getThreadPosts = async(id) => {        
        let {data : responseData} = await axios({
            method: 'get',
            url: REACT_APP_REST_API_URL + '/threads/'+ id +'/posts',
        }).then((response) => {
           return response;
        }, (error) => {
            console.log(error);
        });        
        return responseData.data;      
    }


         
    togglePostUsefullness = (event) =>{
        console.log(event.target);
        console.log(event.target.parentNode);
        
        let parentDiv = event.target.parentNode;
        parentDiv.classList.toggle("active");
        //console.log(event.target.parentNode.querySelector('input[name="password"]'));
        //let parentDiv = 
    };



    clickReplyBtn = (event) =>{
        
        this.answerFormRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        
    };

    render(){


        let question = this.state.threadQuestion;


		return (
		<React.Fragment>
			
		          

	       <div className="btn-section-container clearfix">
                <div className="pull-right">
                    <Link to="/ask-question" className="question-btn">Ask Question</Link>
                </div>
            </div>

                                          

            <div className="forum-section-container clearfix">
                <div className="forum-title">
                    <div className="pull-right">
                        <div className="forum-desc">
                            <div>{this.state.threadPosts.length} Answers</div>
                            {/*<small>134 answers</small>*/}
                        </div>
                    </div>

                    <h3>{question.title}</h3>
                </div>
                
                <div className="forum-items">    
                    <div className="forum-item">
                        <div className="row">
                            <div className="thread-container container-fluid">
                                



                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="thread-main-post mb-4">
                                            <div className="thread-main-post-header">
                                                <div className="user-details flex-wrap w-100 align-items-center">
                                                    
                                                    <div className="user-details-img">
                                                        <img src={userImg} className="d-block ui-w-40 rounded-circle" alt=""/>
                                                    </div>
                                                    <div className="user-details-txt ml-3">
                                                        <Link to={'/profile/'+ question.user.id}>
                                                            {question.user.username}&nbsp;&nbsp;<span>({question.user.account_type})</span>
                                                        </Link>
                                                        <div className="text-muted small">13 days ago</div>
                                                        <div className="text-muted small">{question.user.points} points</div>
                                                    </div>
                                                    <div className="text-muted small ml-3">
                                                        {
                                                            question.categories.map((ctRecord,ctindex) => {
                                                                return (<div className="forum-category" key={ctindex}>
                                                                            <Link to={'/category/'+ctRecord.id}>{ctRecord.category_name}</Link>
                                                                        </div>)
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="thread-main-post-body">
                                                <p>{question.text}</p>
                                            </div>
                                            <div className="thread-main-post-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                                                <div className="px-4 pt-3">
                                                    
                                                    <Link className="d-inline-flex align-items-center align-middle" to="/edit-thread-question">
                                                        <i className="fas fa-edit"></i>&nbsp; <span className="align-middle">Edit</span>
                                                    </Link>
                                                        
                                                    <a href="" className="d-inline-flex align-items-center align-middle ml-4">
                                                        <i className="fa fa-trash text-danger" aria-hidden="true"></i>&nbsp; <span className="align-middle">Delete</span>
                                                    </a>

                                                </div>
                                                <div className="px-4 pt-3"> <button type="button" className="thread_reply_btn btn btn-primary" onClick={this.clickReplyBtn}><i className="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                                            </div>                    
                                        </div>
                                    </div>
                                </div>









                                {
                                    this.state.threadPosts.map((row,index) => {

                                        
                                        let checkMarkCls = (row.is_useful==1)?'active':'';
                                         return (<div className="row" key={index}>
                                                    <div className="col-md-11 pull-right">
                                                        <div className="thread-post mb-4">
                                                            <div className="thread-post-header">
                                                                <div className="user-details flex-wrap w-100 align-items-center">
                                                                    <div className="user-details-img">
                                                                        <img src={userImg} className="d-block ui-w-40 rounded-circle" alt=""/>
                                                                    </div>
                                                                    <div className="user-details-txt ml-3">
                                                                        <Link to={'/profile/'+ row.user.id}>
                                                                        {row.user.username}&nbsp;&nbsp;<span>({row.user.account_type})</span>
                                                                        </Link>
                                                                        <div className="text-muted small">13 days ago</div>
                                                                        <div className="text-muted small">{row.user.points} points</div>
                                                                    </div>




                                                                    <div className={'ml-3 check-mark-div '+ checkMarkCls}>
                                                                        <i className="fa fa-check-circle" aria-hidden="true" onClick={this.togglePostUsefullness}></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="thread-post-body">
                                                                <p>{row.post_text}</p>
                                                            </div>
                                                            <div className="thread-post-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                                                                <div className="px-4 pt-3">
                                                                    <Link className="d-inline-flex align-items-center align-middle" to={'/edit-thread-post/'+row.id}>
                                                                        <i className="fas fa-edit"></i>&nbsp; <span className="align-middle">Edit</span>
                                                                    </Link>
                                                                    <Link className="d-inline-flex align-items-center align-middle ml-4" to={'/delete-thread-post/'+row.id}>
                                                                        <i className="fa fa-trash text-danger" aria-hidden="true"></i>&nbsp; <span className="align-middle">Delete</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>)
                                    })
                                }
                                
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="thread-main-post col-md-12 question-form" ref={this.answerFormRef}>

                                            <div className="forum-title">
                                                <h3>Your Answer</h3>
                                            </div>

                                            <form className="ask-question-form" id="reply_form">
                                                <div className="form-group">
                                                    <textarea required id="reply_text" name="reply_text" cols="40" rows="10" className="form-control"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button name="submit" type="submit" className="btn submit">Submit</button>
                                                    <button name="reset" type="reset" className="btn reset">Reset</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                            </div>                            
                        </div>
                    </div>
                </div>                       
            </div>

		</React.Fragment>    
		)
	}
}


export default Thread;
