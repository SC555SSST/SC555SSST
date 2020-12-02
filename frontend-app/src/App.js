//import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import TopNav from 'components/top-navigation/TopNav';
import LeftSidebar from 'components/left-sidebar/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import Footer from 'components/Footer';




import Home from 'components/pages/Home';
import Page404 from 'components/pages/Page404';
import Login from 'components/pages/Login';
import AskQuestion from 'components/pages/AskQuestion';
import Dashboard from 'components/pages/Dashboard';
import Empty from 'components/pages/Empty';
import EditThreadQuestion from 'components/pages/EditThreadQuestion';
import Profile from 'components/pages/Profile';
import EditThreadPost from 'components/pages/EditThreadPost';

import Register from 'components/pages/Register';
import PermissionDenied from 'components/pages/PermissionDenied';
import ChangePassword from 'components/pages/ChangePassword';
import EditUserProfile from 'components/pages/EditUserProfile';

import AllUsers from 'components/pages/AllUsers';
import Thread from 'components/pages/Thread';
import Category from 'components/pages/Category';
import ThreadSearch from 'components/pages/ThreadSearch';
import CategoryManage from 'components/pages/CategoryManage';
import UserManage from 'components/pages/UserManage';


import { BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (

    <Router>
        <div className="">


            <TopNav/>
            <LeftSidebar/>

            <div class="mcw clearfix container-fluid">
                <div class="row">
                    <div class="col-md-10 page-content clearfix">
                        <noscript>You need to enable JavaScript to run this app.</noscript>
                        
                        {/*<!-- react component : page content loads here-->*/} 
                        <div id="react_page_container">

                            <Route exact path="/" component={Home} />
                            <Route path="/404" component={Page404} />
                            
                            <Route path="/login" component={Login} />
                            <Route path="/ask-question" component={AskQuestion} />
                            <Route path="/dashboard" component={Dashboard} />           
                            <Route path="/empty" component={Empty} />
                            <Route path="/edit-thread-question" component={EditThreadQuestion} />
                            <Route path="/profile" component={Profile} /> 
                            <Route path="/edit-thread-post" component={EditThreadPost} /> 
                            <Route path="/register" component={Register} />
                            <Route path="/permission-denied" component={PermissionDenied} />
                            <Route path="/change-password" component={ChangePassword} />
                            <Route path="/edit-user-profile" component={EditUserProfile} />
                            <Route path="/all-users" component={AllUsers} />
                            <Route path="/thread" component={Thread} />


                            <Route path="/category" component={Category} />
                            <Route path="/thread-search" component={ThreadSearch} /> 
                            <Route path="/category-manage" component={CategoryManage} /> 
                            <Route path="/user-manage" component={UserManage} />
                            
                        </div>{/*<!-- react component end-->*/}

                    </div>

                    {/*<!-- react component right_sidebar loads here-->*/} 
                    <div id="react_right_sidebar_container">
                        <RightSidebar/>    
                    </div>{/*<!-- react right_sidebar component end-->*/}

                </div>

                <div class="footer_row row">
                    <Footer/>
                </div>
            </div>

            
            

        </div>
    </Router>
    
    );
}

export default App;