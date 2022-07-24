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
import user from './user';

function Used(props) {
  console.log(props)
  return (
  <div class="profile">
  <div class="description">
    <img
      src={props.src}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>
  
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{user.stats.likes}</span>
    </li>
  </ul>
  </div>
  );
}



ReactDOM.render(<Used src={user.avatar}/>, 
document.querySelector('#root'))