import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem, StatusDot, Avatar } from './FriendListItem.styles';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <StatusDot isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
