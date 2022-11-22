import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  width: 600px;
  height: fit-content;

  margin: 50px auto 0 auto;
  padding 0;
`;
export const Item = styled.li`
  margin: 0;
  padding: 0;

  border-radius: 10px;

  align-items: center;

  background-color: rgb(234, 234, 234);

  display: flex;

  width: 100%;
  height: 80px;

  list-style-type: none;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
const setBGColor = props => {
  switch (props.statusOnline) {
    case 'true':
      return '#0f0';
    case 'false':
      return '#f00';
    default:
      return 'rgb(234, 234, 234)';
  }
};

export const Status = styled.span`
  width: 20px;
  height: 20px;

  margin: 0 0 0 50px;

  border-radius: 50%;

  background-color: ${setBGColor};
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;

  margin: 0 50px;

  border-radius: 10px;

  background-color: rgb(136, 135, 135, 0.5);
`;
export const Name = styled.p`
  display: block;

  margin: 0;
  padding: 0;
  text-align: center;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;
