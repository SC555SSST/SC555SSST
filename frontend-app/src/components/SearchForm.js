import React from 'react';




class SearchForm extends React.Component{
	render(){
		return (
		<React.Fragment>
			
			<form className="navbar-form navbar-right search-form">
                <input name="search_text" type="text" className="form-control" placeholder="Search..." />
            </form>

		</React.Fragment>    
		)
	}
}


export default SearchForm;
