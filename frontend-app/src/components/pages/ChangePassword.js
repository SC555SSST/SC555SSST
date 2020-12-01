import React from 'react';




class ChangePassword extends React.Component{
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
                            <input id="old_pw" name="old_pw" type="password" className="form-control"/>
                            <button type="button" id="" className="toggle"><i id="" className="eyeIcon fa fa-eye"></i></button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text" className="control-label">New password</label>
                            <input id="new_pw" name="new_pw" type="password" className="form-control"/>
                            <button type="button" id="" className="toggle"><i id="" className="eyeIcon fa fa-eye"></i></button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text" className="control-label">Confirm new password</label>
                            <input id="confirm_new_pw" name="confirm_new_pw" type="password" className="form-control"/>
                            <button type="button" id="" className="toggle"><i id="" className="eyeIcon fa fa-eye"></i></button>
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
