import React from 'react';
import AWN from "awesome-notifications";
import 'awesome-notifications/dist/style.css';

//console.log(NODE_PATH);
class Page404 extends React.Component{
	

    notificationSuccess = (event) =>{
       //alert();
       //Action has been succeeded
       new AWN().success('Custom success message', {durations: {success: 1500}})
    };

    notificationWarning = (event) =>{
       new AWN().warning('Custom warning message', {durations: {warning: 1500}})
    };

    notificationError = (event) =>{
        //Action has been failed
        new AWN().alert('Custom alert message', {durations: {alert: 1500}})
    };




    render(){
        //console.log($);

		return (
    		<React.Fragment>
    			
                <div className="col-md-3">
                    <img className="img-responsive wmx100" src="img/404.png" alt="Page not found"/>
                </div>

                <div className="col-md-9">                                        
                    <div className="forum-title">
                        <h1>404 Page not found</h1>
                    </div>
                    <div className="subheading">
                        <h3>We could not find the page you were looking for.</h3>
                    </div>
                    <div className="">
                        <p>Try <a href="/search">searching for similar questions</a></p>
                        <p>Goto <a href="/questions">Home page</a></p>
                        <p>Browse <a href="/tags">categories</a></p>
                        
                        <button onClick={this.notificationSuccess} type="button" id="btnToggle" className="btn">notificationSuccess</button><br/><br/>
                        <button onClick={this.notificationWarning} type="button" id="btnToggle" className="btn">notificationWarning</button><br/><br/>
                        <button onClick={this.notificationError} type="button" id="btnToggle" className="btn">notificationError</button> <br/><br/>                

                    </div>
                </div>

            </React.Fragment>    
		)
	}
}


export default Page404;
