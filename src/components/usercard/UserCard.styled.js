import styled from '@emotion/styled';

export const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  border: 1px solid grey;
`;

export const UserThumb = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 20px auto;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  color: grey;
  font-size: 22px;
`;

export const Location = styled.p`
  margin-bottom: 20px;
  color: grey;
  font-size: 22px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid grey;
  background-color: lightgrey;
  text-align: center;
  list-style: none;
  margin: 0;
`;

export const StatListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
`;

export const StatLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: black;
`;

export const StatValue = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
`;
