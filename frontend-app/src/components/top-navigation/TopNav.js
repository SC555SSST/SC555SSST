import React from 'react';

import SearchForm from 'components/top-navigation/SearchForm';
import UserMenu from 'components/top-navigation/UserMenu';

//import SearchForm from './SearchForm';
//import UserMenu from './UserMenu';

class TopNav extends React.Component{
	
    expandView = (event) =>{
        let body = document.getElementsByTagName('body')[0]
        body.classList.toggle("msb-x");
    };

    render(){
		return (
		<React.Fragment>
			
			<nav className="mnb navbar navbar-default forum-top navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <i className="ic fa fa-bars"></i>
                        </button>
                        <div className="expand_div">
                            <a href="#" id="msbo" onClick={this.expandView}><i className="ic fa fa-bars"></i></a>
                        </div>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        
                        {/*<!-- react component : user menu loads here-->*/}
                        <div id="react_user_menu_container">
                        <UserMenu/>    
                        </div>{/*<!-- react component end-->*/}
                        
                        {/*<!-- react component : search form loads here-->*/}
                        <div id="react_search_form_container">
                        <SearchForm/>    
                        </div>{/*<!-- react component end-->*/}
                        

                    </div>
                </div>
            </nav>





		</React.Fragment>    
		)
	}
}


export default TopNav;
