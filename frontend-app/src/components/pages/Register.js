import React from 'react';




class Register extends React.Component{
	render(){
		return (
		<React.Fragment>
			
			<div className="forum-section-container clearfix">
                        <div className="forum-title">
                            <h3>Register</h3>
                        </div> 

                        <div className="question-form row">
                        

                            <form className="login-form col-md-9">
                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">Full name</label>
                                    <input id="fullname" name="fullname" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">Username</label>
                                    <input id="username" name="username" type="text" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="select" className="control-label">Gender</label> 
                                    <select id="gender" name="gender" className="select form-control">
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
                                    <button type="button" id="btnToggle" className="toggle"><i id="" className="eyeIcon fa fa-eye"></i></button>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="text" className="control-label">confirm password</label>
                                    <input id="confirm_password" name="confirm_password" type="password" className="form-control"/>
                                    <button type="button" id="btnToggle" className="toggle"><i id="" className="eyeIcon fa fa-eye"></i></button>
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


export default Register;
