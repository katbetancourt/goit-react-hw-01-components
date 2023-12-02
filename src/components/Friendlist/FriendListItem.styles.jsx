import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  Padding:
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  &.online {
    box-shadow: 0 0 10px rgba(8, 206, 41, 0.5);
  }

  &.offline {
    cursor: no-drop;
    box-shadow: 0 0 10px rgba(248, 3, 3, 0.5);
  }
`;

export const StatusDot = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 40px;
  background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 16px;
  padding: 10px;
`;

export const name = styled.p`
  border-radius: 50%;
  margin-right: 16px;
  
`;
