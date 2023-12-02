import React from 'react';
import { FriendListContainer } from './FriendList.styles';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendListContainer>
  );
};

export default FriendList;
