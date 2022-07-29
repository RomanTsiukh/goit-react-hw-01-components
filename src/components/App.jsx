import { Profile } from './Profile/Profile'
import { StatisticsList } from './Statistics/StatisticsList';
import { FriendList } from './Friends/FriendList';
import user from './Profile/user.json';
import stats from './Statistics/data.json';
import friends from './Friends/friends.json';


export function App() {
    return(
      <div>
        <Profile link={user.avatar} usname={user.username} ustag={user.tag} locat={user.location} folowers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
        
        <StatisticsList title="Upload stats" stats={stats}/>

        <FriendList friends={friends}/>
      </div>
    )};

