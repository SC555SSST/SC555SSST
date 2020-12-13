import React from 'react';




class Dashboard extends React.Component{
	render(){
		return (
		<React.Fragment>
			
		          
			<div className="forum-section-container clearfix">
                        

                        
                        <div className="row tbl-container">
                            <div className="col-md-9">

                                <div className="forum-title">
                                    <h3>Summary</h3>
                                </div>

                                <table id="" className="table table-striped table-bordered dt-responsive nowrap">
                                    <thead>
                                        <tr>
                                            <th>Attribute</th>
                                            <th>Value</th>                                    
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Categories</td>
                                            <td>23</td>                              
                                        </tr>
                                        <tr>
                                            <td>Threads</td>
                                            <td>45</td>                              
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>




                        <div className="row tbl-container">
                            <div className="col-md-9">

                                <div className="forum-title">
                                    <h3>Threads</h3>
                                </div>

                                <table id="" className="table table-striped table-bordered dt-responsive nowrap">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Thread count</th>                                    
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Categories one</td>
                                            <td>23</td>                              
                                        </tr>
                                        <tr>
                                            <td>Rice</td>
                                            <td>5</td>                              
                                        </tr>
                                        <tr>
                                            <td>Vegetable</td>
                                            <td>3</td>                              
                                        </tr>
                                        <tr>
                                            <td>Fruits</td>
                                            <td>31</td>                              
                                        </tr>
                                        <tr>
                                            <td>Categories two</td>
                                            <td>17</td>                              
                                        </tr>
                                        <tr>
                                            <td>Categories three</td>
                                            <td>54</td>                              
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        
                        <div className="row tbl-container">
                            <div className="col-md-9">

                                <div className="forum-title">
                                    <h3>Users</h3>
                                </div>

                                <table id="" className="table table-striped table-bordered dt-responsive nowrap">
                                    <thead>
                                        <tr>
                                            <th>Attribute</th>
                                            <th>Value</th>                                    
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Farmers</td>
                                            <td>12</td>                              
                                        </tr>
                                        <tr>
                                            <td>Experts</td>
                                            <td>11</td>                              
                                        </tr>                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Total Users</td>
                                            <td>21</td>                              
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>


                    </div>




		</React.Fragment>    
		)
	}
}


export default Dashboard;
