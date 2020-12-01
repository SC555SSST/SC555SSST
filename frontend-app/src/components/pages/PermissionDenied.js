import React from 'react';




class PermissionDenied extends React.Component{
	render(){
		return (
		<React.Fragment>
			
		    <div className="col-md-3">
                        <img className="img-responsive wmx100" src="img/denied.png" alt="Page not found"/>
                    </div>

                    <div className="col-md-9">                                        
                        <div className="forum-title">
                            <h1>Permission denied</h1>
                        </div>
                        <div className="subheading">
                            <h3>you dont have permission to access this resource.</h3>
                        </div>
                        <div className="">
                            <p>Goto <a href="/questions">Home page</a></p>
                        </div>
                        <div className="">
                            <a href="#" data-toggle="modal" data-target="#deniedPermissionModal">Popup message</a>
                        </div>

                    </div>      





		</React.Fragment>    
		)
	}
}


export default PermissionDenied;
