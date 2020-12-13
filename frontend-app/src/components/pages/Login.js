import React from 'react';




class Login extends React.Component{
	

    



         
    
    togglePassword = (event) =>{
        
        //console.log(event.target);
        //console.log(event.target.parentNode);
        //console.log(event.target.parentNode.querySelector('input[name="password"]'));
        
        let passwordInput = event.target.parentNode.querySelector('input[name="password"]')
        let btn = event.target

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            btn.classList.add("fa-eye-slash");
            btn.classList.remove("fa-eye");
        } else {
            passwordInput.type = 'password';
            btn.classList.add("fa-eye");
            btn.classList.remove("fa-eye-slash");
        }


        
    };


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
                                <input id="username" name="username" type="text" className="form-control"required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text" className="control-label">password</label>
                                <input id="password" name="password" type="password" className="form-control" required/>
                                <button onClick={this.togglePassword} type="button" id="btnToggle" className="eyeIcon fa fa-eye toggle">
                                </button>
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
