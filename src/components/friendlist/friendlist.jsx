import PropTypes from 'prop-types';
import {
  FriendListContainer,
  Item,
  Avatar,
  Name,
  Status,
} from './friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListContainer>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statusOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendList.prototype = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
