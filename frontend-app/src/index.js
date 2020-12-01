import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';






import RightSidebar from './components/RightSidebar';
import UserMenu from './components/UserMenu';
import SearchForm from './components/SearchForm';
import LeftSidebarMenu from './components/LeftSidebarMenu';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react_page_container')
);


ReactDOM.render(
  <React.StrictMode>
    <RightSidebar />
  </React.StrictMode>,
  document.getElementById('react_right_sidebar_container')
);

ReactDOM.render(
  <React.StrictMode>
    <UserMenu />
  </React.StrictMode>,
  document.getElementById('react_user_menu_container')
);


ReactDOM.render(
  <React.StrictMode>
    <SearchForm />
  </React.StrictMode>,
  document.getElementById('react_search_form_container')
);

ReactDOM.render(
  <React.StrictMode>
    <LeftSidebarMenu />
  </React.StrictMode>,
  document.getElementById('react_left_sidebar_menu_container')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
