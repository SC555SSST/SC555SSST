import React from 'react';

import axios from 'axios';


const {REACT_APP_REST_API_URL} = process.env;

class SearchForm extends React.Component{
	

	 handleSearchKeyUp = async(event) => { 
		
		if (event.keyCode === 13) {
		    let searchQuery = event.target.value;
		    let url = '/threads/search?q='+ searchQuery;
		    
		    let {data : response} = await axios({
		    	method: 'get',
		    	url: REACT_APP_REST_API_URL + url,
		    }).then((response) => {
		    	return response;
		    }, (error) => {
		    	console.log(error);
		    });
		    console.log(response.data);
		    //return response.data.category_name;

		    //document.getElementById("myBtn").click();
		  }


		  //   ww999
		
	}




	render(){
		return (
		<React.Fragment>
			
			<form className="navbar-form navbar-right search-form" onSubmit={e => { e.preventDefault(); }}>
			{/*<form className="navbar-form navbar-right search-form" onSubmit={this.submitHandler}>*/}
                <input onKeyUp={this.handleSearchKeyUp} name="search_text" type="text" className="form-control" placeholder="Search..." />
            </form>

		</React.Fragment>    
		)
	}
}


export default SearchForm;
