// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));
// Used 
//   link={user.avatar} 
//   usname={user.username}
//   ustag={user.tag}
//   locat={user.location}
//   folowers={user.stats.followers}
//   views={user.stats.views}
//   likes={user.stats.likes}