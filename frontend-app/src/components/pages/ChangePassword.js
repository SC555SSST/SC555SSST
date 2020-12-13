import React from 'react';




class ChangePassword extends React.Component{
	
    togglePassword = (event) =>{
        
        //console.log(event.target);
        //console.log(event.target.parentNode);
        //console.log(event.target.parentNode.querySelector('input[name="password"]'));
        
        let passwordInput = event.target.parentNode.querySelector('input')
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
                    <h3>Change password</h3>
                </div> 

                <div className="question-form row">
                

                    <form className="change-pw-form col-md-9">
                        <div className="form-group">
                            <label htmlFor="text" className="control-label">Old password</label>
                            <input required id="old_pw" name="old_pw" type="password" className="form-control"/>
                            <button onClick={this.togglePassword} type="button" id="" className="eyeIcon fa fa-eye toggle"></button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text" className="control-label">New password</label>
                            <input required id="new_pw" name="new_pw" type="password" className="form-control"/>
                            <button onClick={this.togglePassword} type="button" id="" className="eyeIcon fa fa-eye toggle"></button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text" className="control-label">Confirm new password</label>
                            <input required id="confirm_new_pw" name="confirm_new_pw" type="password" className="form-control"/>
                            <button onClick={this.togglePassword} type="button" id="" className="eyeIcon fa fa-eye toggle"></button>
                        </div>

                        <div className="form-group">
                            <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                            <button name="reset" type="reset" className="btn btn-danger">Reset</button>
                        </div>
                    </form>


                </div>
            </div> 




		</React.Fragment>    
		)
	}
}


export default ChangePassword;
