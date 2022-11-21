import { UserCard } from './usercard/usercard';
import userCard from './usercard/user.json';
export const App = () => {
  console.log();
  return (
    <div>
      <UserCard
        username={userCard.username}
        tag={userCard.tag}
        location={userCard.location}
        avatar={userCard.avatar}
        followers={userCard.stats.followers}
        views={userCard.stats.views}
        likes={userCard.stats.likes}
      />
    </div>
  );
};
