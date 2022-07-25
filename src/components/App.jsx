// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


import Profile from './Profile'
import user from '../user';

export default function App() {
    return(
      <div>
        <Profile 
          link={user.avatar} 
          usname={user.username}
          ustag={user.tag}
          locat={user.location}
          folowers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
    </div>
    )
  }
