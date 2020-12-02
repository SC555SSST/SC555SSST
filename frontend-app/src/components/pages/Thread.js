import React from 'react';




class Thread extends React.Component{
	
    constructor(props) {
        super(props)
        this.answerFormRef = React.createRef()
    }



         
    
    clickReplyBtn = (event) =>{
        
        this.answerFormRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        
    };

    render(){
		return (
		<React.Fragment>
			
		          

			<div className="btn-section-container clearfix">
                        <div className="pull-right">
                            <a href="" className="question-btn">Ask Question</a>
                        </div>
                    </div>

                                                  

                    <div className="forum-section-container clearfix">
                        <div className="forum-title">
                            <div className="pull-right">
                                <div className="forum-desc">
                                    <div>134 Answers</div>
                                    {/*<small>134 answers</small>*/}
                                </div>
                            </div>

                            <h3>Thread title</h3>
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
                                                                <img src="img/user-images/user-2.png" className="d-block ui-w-40 rounded-circle" alt=""/>
                                                            </div>
                                                            <div className="user-details-txt ml-3">
                                                                <a href="" data-abc="true">Tom Harry</a>
                                                                <div className="text-muted small">13 days ago</div>
                                                            </div>
                                                            <div className="text-muted small ml-3">
                                                                <div className="forum-category"><a href="">Rice</a></div>
                                                                <div className="forum-category"><a href="">Vegetables</a></div>
                                                                <div className="forum-category"><a href="">Fruits</a></div>
                                                                <div className="forum-category"><a href="">Water</a></div>                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="thread-main-post-body">
                                                        <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days.
                                                            With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.
                                                        </p>
                                                        <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days.
                                                            With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.
                                                        </p>
                                                    </div>
                                                    <div className="thread-main-post-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                                                        <div className="px-4 pt-3">
                                                            <a href="" className="d-inline-flex align-items-center align-middle" data-abc="true">
                                                                <i className="fas fa-edit"></i>&nbsp; <span className="align-middle">Edit</span>
                                                            </a>
                                                            <a href="" className="d-inline-flex align-items-center align-middle ml-4">
                                                                <i className="fa fa-trash text-danger" aria-hidden="true"></i>&nbsp; <span className="align-middle">Delete</span>
                                                            </a>
                                                        </div>
                                                        <div className="px-4 pt-3"> <button type="button" className="thread_reply_btn btn btn-primary" onClick={this.clickReplyBtn}><i className="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                                                    </div>                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-11 pull-right">
                                                <div className="thread-post mb-4">
                                                    <div className="thread-post-header">
                                                        <div className="user-details flex-wrap w-100 align-items-center">
                                                            <div className="user-details-img">
                                                                <img src="img/user-images/user-2.png" className="d-block ui-w-40 rounded-circle" alt=""/>
                                                            </div>
                                                            <div className="user-details-txt ml-3">
                                                                <a href="" data-abc="true">Tom Harry</a>
                                                                <div className="text-muted small">13 days ago</div>
                                                            </div>
                                                            <div className="ml-3 active check-mark-div">
                                                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="thread-post-body">
                                                        <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days.
                                                            With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.
                                                        </p>
                                                        <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days.
                                                            With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.
                                                        </p>
                                                    </div>
                                                    <div className="thread-post-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                                                        <div className="px-4 pt-3">
                                                            <a href="" className="d-inline-flex align-items-center align-middle" data-abc="true">
                                                                <i className="fas fa-edit"></i>&nbsp; <span className="align-middle">Edit</span>
                                                            </a>
                                                            <a href="" className="d-inline-flex align-items-center align-middle ml-4">
                                                                <i className="fa fa-trash text-danger" aria-hidden="true"></i>&nbsp; <span className="align-middle">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-11 pull-right">
                                                <div className="thread-post mb-4">
                                                    <div className="thread-post-header">
                                                        <div className="user-details flex-wrap w-100 align-items-center">
                                                            <div className="user-details-img">
                                                                <img src="img/user-images/user-2.png" className="d-block ui-w-40 rounded-circle" alt=""/>
                                                            </div>
                                                            <div className="user-details-txt ml-3">
                                                                <a href="" data-abc="true">Tom Harry</a>
                                                                <div className="text-muted small">13 days ago</div>
                                                            </div>
                                                            <div className="ml-3 check-mark-div">
                                                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="thread-post-body">
                                                        <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days.
                                                            With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.
                                                        </p>
                                                        <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days.
                                                            With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.
                                                        </p>
                                                    </div>
                                                    <div className="thread-post-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                                                        <div className="px-4 pt-3">
                                                            <a href="" className="d-inline-flex align-items-center align-middle" data-abc="true">
                                                                <i className="fas fa-edit"></i>&nbsp; <span className="align-middle">Edit</span>
                                                            </a>
                                                            <a href="" className="d-inline-flex align-items-center align-middle ml-4">
                                                                <i className="fa fa-trash text-danger" aria-hidden="true"></i>&nbsp; <span className="align-middle">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="thread-main-post col-md-12 question-form" ref={this.answerFormRef}>

                                                    <div className="forum-title">
                                                        <h3>Your Answer</h3>
                                                    </div>

                                                    <form className="ask-question-form" id="reply_form">
                                                        <div className="form-group">
                                                            <textarea id="reply_text" name="reply_text" cols="40" rows="10" className="form-control"></textarea>
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
