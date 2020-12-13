import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class RightSidebar extends React.Component{
	
	constructor(){
        super();
        this.state = {
        	categories : [
                //{id: 1, category_name: "1Rice"},
                //{id: 2, category_name: "2Rice"},
               	//{id: 2, category_name: "3Rice"}
            ]            
        }
    }

    async componentDidMount() {
    	const {REACT_APP_REST_API_URL} = process.env
		console.log(REACT_APP_REST_API_URL);
    	console.log('componentDidMount');


    	let initialItems = await axios({
			method: 'get',
			url: REACT_APP_REST_API_URL + '/categories',
		}).then((response) => {
			console.log(response);
			console.log(response.data);
			return response;
		}, (error) => {
			console.log(error);
		});
		
		console.log(initialItems.data.data);
		this.setState({ categories: initialItems.data.data});
    }


	render(){
		return (
		<React.Fragment>
			<div className="col-sm-12 col-md-2 category-div">
				{this.state.categories.length>0 && (
				<ul>
					{				
					this.state.categories.map((row,index) => {						
						

						const newTo = { 
							pathname: '/category/' + row.id, 
							category_name: row.category_name 
						};

						//console.log(index);
						return (<li key={index}>
									{/*<a href="#">{index} - {row.category_name}</a>*/}
									<Link to={newTo}>{row.category_name}</Link>
								</li>)
					})						
					}	


					{/*<li><a href="#">Category 1</a></li>
					<li><a href="#">Rice</a></li>
					<li><a href="#">Trash</a></li>
					<li><a href="#">Category 2</a></li>
					<li><a href="#">fruits</a></li>
					<li><a href="#">vegetables</a></li>*/}
				</ul>
				)}
			</div>	
		</React.Fragment>    
		)
	}
}


export default RightSidebar;

