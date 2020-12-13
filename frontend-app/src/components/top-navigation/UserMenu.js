import React from 'react';
import userImg from 'components/user-2.png';



class UserMenu extends React.Component{
	render(){
		return (
		<React.Fragment>
			
			<ul className="nav navbar-nav navbar-right">
                <li className="dropdown profile">
                    
                    <a href="#" className="profile-link dropdown-toggle" data-toggle="dropdown">
                        <img src={userImg} className="user-image" alt="User Image"/>
                        <span className="username">Alexander Pierce</span>
                        &nbsp;<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu user_dropdown">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Change password</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#logoutModal">Logout</a></li>
                    </ul>


                    {/*
            		
            		<a href="#" className="profile-link dropdown-toggle" data-toggle="dropdown">
                        <span className="username">Menu</span>
                        &nbsp;<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu user_dropdown">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>

                	*/}


                </li>
            </ul>





		</React.Fragment>    
		)
	}
}


export default UserMenu;
