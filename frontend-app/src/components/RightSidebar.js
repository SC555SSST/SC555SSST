import React from 'react';



class RightSidebar extends React.Component{
	render(){
		return (
		<React.Fragment>
			<div className="col-sm-12 col-md-2 category-div">
				<ul>
					<li><a href="#">Category 1</a></li>
					<li><a href="#">Rice</a></li>
					<li><a href="#">Trash</a></li>
					<li><a href="#">Category 2</a></li>
					<li><a href="#">fruits</a></li>
					<li><a href="#">vegetables</a></li>
				</ul>
			</div>	
		</React.Fragment>    
		)
	}
}


export default RightSidebar;
