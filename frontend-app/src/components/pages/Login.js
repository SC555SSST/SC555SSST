import React from 'react';




class Login extends React.Component{
	render(){
		return (
    		<React.Fragment>
    			
	 	        <div className="forum-section-container clearfix">
                    <div className="forum-title">
                        <h3>Login</h3>
                    </div> 

                    <div className="question-form row">
                        <form className="login-form col-md-9">
                            <div className="form-group">
                                <label htmlFor="text" className="control-label">Username</label>
                                <input id="username" name="username" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text" className="control-label">password</label>
                                <input id="password" name="password" type="password" className="form-control"/>
                                <button type="button" id="btnToggle" className="toggle"><i id="" className="eyeIcon fa fa-eye"></i></button>
                            </div>                                

                            <div className="form-group">
                                <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                                <button name="reset" type="reset" className="btn btn-danger">Reset</button>
                            </div>

                            <div className="form-group">
                                <a href="#">Register a new membership</a>
                            </div>
                        </form>
                    </div>
                </div>

            </React.Fragment>    
		)
	}
}


export default Login;
