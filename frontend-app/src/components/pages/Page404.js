import React from 'react';
import AWN from "awesome-notifications";
import 'awesome-notifications/dist/style.css';

import { Modal, Button } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';


const {REACT_APP_REST_API_URL} = process.env
console.log(REACT_APP_REST_API_URL);


class Page404 extends React.Component{
    
    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }



    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    toggleModal = () => {
        this.setState(prevState => ({
          showHide: !prevState.showHide
        }));
    };



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
                 

                <div>
                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>Launch demo modal</Button>
                    <Modal show={this.state.showHide} onHide={this.toggleModal}>
                        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </React.Fragment>    
		)
	}
}


export default Page404;
