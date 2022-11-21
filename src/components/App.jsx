import { UserCard } from './usercard/usercard';
import { Statistic } from './statistics/statistics';
import userCard from './usercard/user.json';
import data from './statistics/data.json';
export const App = () => {
  return (
    <>
      <UserCard
        username={userCard.username}
        tag={userCard.tag}
        location={userCard.location}
        avatar={userCard.avatar}
        stats={userCard.stats}
      />
      <Statistic title={'Upload stats'} stats={data} />
    </>
  );
};
