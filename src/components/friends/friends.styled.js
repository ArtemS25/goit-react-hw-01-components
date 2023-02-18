import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
  list-style: none;
  flex-direction: column;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  gap: 15px;
  border: 1px solid #000;
  border-radius: 15px;
  width: 240px;
  align-items: center;
  justify-content: baseline;
  &:hover,
  &:focus {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 15px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return '#fff';
    }
  }};
`;
