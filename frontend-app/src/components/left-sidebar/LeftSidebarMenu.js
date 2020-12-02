import React from 'react';


//import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from "react-router-dom";


















class LeftSidebarMenu extends React.Component{
	render(){
		return (
		
		<React.Fragment>			

	        <ul className="nav navbar-nav">
            {/*<!-- Dropdown-->*/}
                
                <li className="mobile_menu hidden-sm hidden-md hidden-lg panel panel-default" id="dropdown">
                    <a className="" data-toggle="collapse" href="#dropdown-lvl1">
                        <i className="fas fa-bars"></i>  Menu
                        <span className="caret"></span>
                    </a>
                    {/*<!-- Dropdown level 1 -->*/}
                    <div id="dropdown-lvl1" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul className="nav navbar-nav">
                                <li><a href="#">Mail</a></li>
                                <li><a href="#">Calendar</a></li>
                                <li><a href="#">Ecommerce</a></li>
                                <li><a href="#">User</a></li>
                                <li><a href="#">Social</a></li>

                                {/*<!-- Dropdown level 2 -->*/}
                                <li className="panel panel-default" id="dropdown">
                                    <a data-toggle="collapse" href="#dropdown-lvl2">
                                        <i className="glyphicon glyphicon-off"></i> Sub Level <span className="caret"></span>
                                    </a>
                                    <div id="dropdown-lvl2" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <ul className="nav navbar-nav">
                                                <li><a href="#">Link</a></li>
                                                <li><a href="#">Link</a></li>
                                                <li><a href="#">Link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                
                {/*
                <li className="active hidden-xs"><a href="#"><span className="glyphicon glyphicon-signal"></span> Link</a></li>
                <li className="hidden-xs"><a href="#"><span className="glyphicon glyphicon-signal"></span> Link</a></li>
				
				<li  className="hidden-xs"><a href="/404">-404</a></li>
				<li  className="hidden-xs"><a href="/login">-Login</a></li>
                */}

				
				<li  className="hidden-xs"><Link to="/">Home</Link></li>
				<li  className="hidden-xs"><Link to="/404">Page404</Link></li>
				<li  className="hidden-xs"><Link to="/login">Login</Link></li>
				<li  className="hidden-xs"><Link to="/ask-question">AskQuestion</Link></li>
				<li  className="hidden-xs"><Link to="/dashboard">Dashboard</Link>           </li>
				<li  className="hidden-xs"><Link to="/empty">Empty</Link></li>
				<li  className="hidden-xs"><Link to="/edit-thread-question">EditThreadQuestion</Link></li>
				<li  className="hidden-xs"><Link to="/profile">Profile</Link> </li>
				<li  className="hidden-xs"><Link to="/edit-thread-post">EditThreadPost</Link> </li>
				<li  className="hidden-xs"><Link to="/register">Register</Link></li>
				<li  className="hidden-xs"><Link to="/permission-denied">PermissionDenied</Link></li>
				<li  className="hidden-xs"><Link to="/change-password">ChangePassword</Link></li>
				<li  className="hidden-xs"><Link to="/edit-user-profile">EditUserProfile</Link></li>
				<li  className="hidden-xs"><Link to="/all-users">AllUsers</Link></li>
				<li  className="hidden-xs"><Link to="/thread">Thread</Link></li>

                            <li  className="hidden-xs"><Link to="/category">Category</Link></li>
                            <li  className="hidden-xs"><Link to="/thread-search">ThreadSearch</Link></li>
                            <li  className="hidden-xs"><Link to="/category-manage">CategoryManage</Link></li> 
                            <li  className="hidden-xs"><Link to="/user-manage">UserManage</Link></li>



            </ul>

        </React.Fragment>
         
		)
	}
}


export default LeftSidebarMenu;
