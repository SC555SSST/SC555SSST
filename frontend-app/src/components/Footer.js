import React from 'react';



class Footer extends React.Component{
	componentDidMount(){
        var d = new Date();
        var n = d.getFullYear();
        document.getElementById("year-div").innerHTML = n;
    }

    render(){
		return (
		<React.Fragment>
			<footer className="footer-section">
                <div className="container-fluid">
                    
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-5 col-lg-5 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="/img/logo.png" className="img-fluid" alt="logo"/></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-2 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Categories</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Category 1</a></li>
                                        <li><a href="#">Category two</a></li>
                                        <li><a href="#">Rice</a></li>
                                        <li><a href="#">Fruits</a></li>
                                        <li><a href="#">Vegetables</a></li>                                
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-5 col-md-6 mb-30">
                                <div className="footer-widget">
                                    
                                    <div className="row">
                                        <div className="col-md-12 mb-30">
                                            <div className="single-cta">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <div className="cta-text">
                                                    <h4>Find us</h4>
                                                    <span>123 Main Street, New York, NY 10030</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-30">
                                            <div className="single-cta">
                                                <i className="fas fa-phone"></i>
                                                <div className="cta-text">
                                                    <h4>Call us</h4>
                                                    <span>+94712000000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-30">
                                            <div className="single-cta">
                                                <i className="far fa-envelope-open"></i>
                                                <div className="cta-text">
                                                    <h4>Mail us</h4>
                                                    <span>mail@info.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 text-center text-md-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; <span id="year-div"></span>, All Right Reserved <a href="#">SSST</a></p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 d-none d-lg-block text-center text-md-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
		</React.Fragment>    
		)
	}
}


export default Footer;
