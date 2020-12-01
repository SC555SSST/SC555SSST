import React from 'react';




class Page404 extends React.Component{
	
    render(){
		return (
    		<React.Fragment>
    			
                <div className="col-md-3">
                    <img className="img-responsive wmx100" src="img/404.png" alt="Page not found"/>
                </div>

                <div className="col-md-9">                                        
                    <div className="forum-title">
                        <h1>404 Page not found</h1>
                    </div>
                    <div className="subheading">
                        <h3>We could not find the page you were looking for.</h3>
                    </div>
                    <div className="">
                        <p>Try <a href="/search">searching for similar questions</a></p>
                        <p>Goto <a href="/questions">Home page</a></p>
                        <p>Browse <a href="/tags">categories</a></p>
                    </div>
                </div>

            </React.Fragment>    
		)
	}
}


export default Page404;
