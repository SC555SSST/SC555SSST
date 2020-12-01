import React from 'react';




class CategoryManage extends React.Component{
	render(){

        const tblRows = [];
        
        for (let i = 0; i <= 100; i++) {
            
            tblRows.push(
                            <tr key={i}>                                       
                                <td>{"Category-" + i }</td>                             
                                <td  align="center">
                                    <a href="#" data-toggle="modal" data-target="#editModal" className="btn btn-primary btn-xs proj-update" data-updateid="">
                                        <span className="glyphicon glyphicon-pencil"></span>
                                    </a>
                                </td>
                                <td  align="center">
                                    <a href="#" data-toggle="modal" data-target="#deleteModal" className="btn btn btn-danger btn-xs proj-delete" data-title="Delete">
                                        <span className="glyphicon glyphicon-remove-sign"></span>
                                    </a>
                                </td>
                            </tr>);
        }





		return (
		    <React.Fragment>			
		          
                <div className="forum-section-container clearfix">                    
                    <div className="forum-title">
                        <h3>Manage Category</h3>
                    </div>
                    
                    <div className="tbl-container">
                        <table id="categoryList" className="hover table table-striped table-bordered dt-responsive nowrap">
                            <thead>
                                <tr>
                                    <th>Category name</th>                                    
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tblRows}
                            </tbody>
                        </table>
                    </div>
                </div>

		  </React.Fragment>    
		)
	}
}


export default CategoryManage;
