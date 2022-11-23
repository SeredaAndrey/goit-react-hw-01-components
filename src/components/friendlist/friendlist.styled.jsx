import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  width: 600px;
  height: fit-content;

  margin-top: 50px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
`;
export const Item = styled.li`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

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
export const Status = styled.span`
  width: 20px;
  height: 20px;

  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 50px;

  border-radius: 50%;

  background-color: ${({statusOnline}) =>{
    if (statusOnline){
      return '#0f0';
    }
    else {
      return  '#f00';
    }
  }};
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;

  margin-top: 0;
  margin-right: 50px;
  margin-bottom: 0;
  margin-left: 50px;

  border-radius: 10px;

  background-color: rgb(136, 135, 135, 0.5);
`;
export const Name = styled.p`
  display: block;

  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

  text-align: center;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;
