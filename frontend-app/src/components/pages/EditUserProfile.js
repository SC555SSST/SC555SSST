import React from 'react';




class EditUserProfile extends React.Component{
	
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
                            <h3>Edit user profile</h3>
                        </div> 

                        <div className="question-form row">
                        

                            <form className="login-form col-md-9">
                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">Full name</label>
                                    <input id="fullname" name="fullname" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">Username</label>
                                    <input disabled value="ddf12" id="username" name="username" type="text" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="select" className="control-label">Gender</label> 
                                    <select disabled id="gender" name="gender" className="select form-control">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div> 

                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">Email</label>
                                    <input id="email" name="email" type="text" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">password</label>
                                    <input id="password" name="password" type="password" className="form-control"/>
                                    <button onClick={this.togglePassword} type="button" id="" className="eyeIcon fa fa-eye toggle"></button>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">confirm password</label>
                                    <input id="confirm_password" name="confirm_password" type="password" className="form-control"/>
                                    <button onClick={this.togglePassword} type="button" id="" className="eyeIcon fa fa-eye toggle"></button>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="radio" className="control-label">User account type</label> 
                                    <div>
                                        <label className="radio-inline">
                                            <input type="radio" name="account_type" value="farmer"/>
                                            Farmer
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="account_type" value="expert"/>
                                            Expert
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="select" className="control-label">User badge</label> 
                                    <select id="user_badge" name="user_badge" className="select form-control">
                                        <option value="badge1">badge1</option>
                                        <option value="badge2">badge2</option>
                                        <option value="badge3">badge3</option>
                                        <option value="badge4">badge4</option>
                                        <option value="badge5">badge5</option>
                                    </select>
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


export default EditUserProfile;
