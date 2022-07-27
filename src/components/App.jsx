import Profile from './Profile'
import Statistics from './Statistics'
import user from '../user';
import data from '../data';

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
        {data.map(dat => (
        <Statistics 
          key={dat.id} 
          lab={dat.label}
          percent={dat.percentage}
                />
        ))}

    </div>

    );
  };



// import Statistics from './Statistics'
// import data from '../data';

// export default function Appp() {
//   return(
//     <div>
      // <Statistics 
      //   link={user.avatar} 
      //   usname={user.username}
      //   ustag={user.tag}
      // />
//   </div>
//   );
// };
