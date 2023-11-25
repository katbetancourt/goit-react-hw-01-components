import styled from 'styled-components';

export const ProfileBackground = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e8f0;
  height: 700px;
  width: 600px;
`;

export const ProfileContainer = styled('div')`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  height: 450px;
  width: 400px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 35px 0 0;
`;

export const ProfileDescription = styled('div')`
  text-align: center;
`;

export const ProfileImage = styled('img')`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 0, 5px solid black;
`;

export const ProfileName = styled('p')`
  font-size: 25px;
  font-weight: bold;
`;

export const ProfileContact = styled('p')`
  font-size: 20px;
  color: grey;
`;

// Agregado el componente Stats
export const ProfileMetrics = styled('div')`
  display: flex;
  align-items: center;
  background-color: #f3f6f9;
  height: 97px;
  width: 370px;
  padding: 15px;
  margin-top: 20px;
  border-top: 2px solid;
  border-color: #e7ecf2;
  border-radius: 0 0 5px 5px;

  -------------------------------------
`;
export const Followers = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  flex-basis: calc(50% - 7.5px);
  margin-bottom: 15px;
`;

export const Value = styled('div')`
  font-size: 20px;
  font-weight: bold;
`;

export const Views = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  flex-basis: calc(50% - 7.5px);
  margin-bottom: 15px;
`;

export const Likes = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  flex-basis: calc(50% - 7.5px);
  margin-bottom: 15px;
`;
