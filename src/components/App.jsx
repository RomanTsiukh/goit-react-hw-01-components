import { Profile } from './Profile/Profile'
// import { Statistics } from './Statistics/Statistics'
import { StatisticsList } from './Statistics/StatisticsList';
import user from './Profile/user.json';
import stats from './Statistics/data.json';


export function App() {
    return(
      <div>
        <Profile link={user.avatar} usname={user.username} ustag={user.tag} locat={user.location} folowers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
        
        <StatisticsList items={stats}/>

        {/* {stats.map(stat => 
          <Statistics 
          key={stat.id}
          lab={stat.label}
          percent={stat.percentage}
        />
          )} */}
        
        
        
        {/* <Statistics 
          lab={data[0].label}
          percent={data[0].percentage}
        />
        <Statistics 
          lab={data[1].label}
          percent={data[1].percentage}
        />
        <Statistics 
          lab={data[2].label}
          percent={data[2].percentage}
        />
        <Statistics 
          lab={data[3].label}
          percent={data[3].percentage}
        />
        <Statistics 
          lab={data[4].label}
          percent={data[4].percentage}
        /> */}
        




      </div>
    )};

