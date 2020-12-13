import React from 'react';
//import LeftSidebarMenu from './components/left-sidebar/LeftSidebarMenu';
import LeftSidebarMenu from 'components/left-sidebar/LeftSidebarMenu';
// import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from "react-router-dom";




class LeftSidebar extends React.Component{
	render(){
		return (
		    <React.Fragment>			

                <div className="msb col-md-2" id="msb">
                    <nav className="navbar navbar-default forum-left" role="navigation">
                        {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
                        <div className="navbar-header">
                            <div className="brand-wrapper">
                                {/*<!-- Brand -->*/}
                                <div className="brand-name-wrapper">
                                    <Link to="/" title="kamatha-logo" id="branding">
                                        <img src="/img/logo.png" alt="kamatha-logo" title="kamatha-logo" className="img-responsive"/>
                                    </Link>
                                    {/*<a href="/" title="kamatha-logo" id="branding">
                                        <img src="/img/logo.png" alt="kamatha-logo" title="kamatha-logo" className="img-responsive"/>
                                    </a>*/}
                                </div>
                            </div>
                        </div>

                        {/*<!-- Main Menu -->*/}
                        <div className="side-menu-container">
                            {/*<!-- react component : left sidebar menu loads here-->*/}
                            <div id="react_left_sidebar_menu_container">
                                <LeftSidebarMenu/>   
                            </div>{/*<!-- react component end-->*/}

                        </div>
                    </nav>  
                </div>
	        

            </React.Fragment>
        )
	}
}


export default LeftSidebar;
