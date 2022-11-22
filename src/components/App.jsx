import { UserCard } from './usercard/usercard';
import data from './statistics/data.json';

import { Statistic } from './statistics/statistics';
import userCard from './usercard/user.json';

import { FriendList } from './friendlist/friendlist';
import friends from './friendlist/friends.json';

export const App = () => {
  return (
    <>
      <UserCard
        key={userCard.username}
        username={userCard.username}
        tag={userCard.tag}
        location={userCard.location}
        avatar={userCard.avatar}
        stats={userCard.stats}
      />
      <Statistic key={'Upload stats'} title="Upload stats" stats={data} />
      <FriendList key={'Friendlist'} friends={friends} />
    </>
  );
};
