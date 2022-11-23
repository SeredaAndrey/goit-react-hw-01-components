import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  width: 600px;
  height: fit-content;

  margin-top: ${p=>p.theme.space[5]}px;
  margin-right: auto;
  margin-bottom: ${p=>p.theme.space[0]}px;
  margin-left: auto;

  padding-top: ${p=>p.theme.space[0]}px;
  padding-right: ${p=>p.theme.space[0]}px;
  padding-bottom: ${p=>p.theme.space[0]}px;
  padding-left: ${p=>p.theme.space[0]}px;
`;
export const Item = styled.li`
  margin-top: ${p=>p.theme.space[0]}px;
  margin-right: ${p=>p.theme.space[0]}px;
  margin-bottom: ${p=>p.theme.space[0]}px;
  margin-left: ${p=>p.theme.space[0]}px;

  padding-top: ${p=>p.theme.space[0]}px;
  padding-right: ${p=>p.theme.space[0]}px;
  padding-bottom: ${p=>p.theme.space[0]}px;
  padding-left: ${p=>p.theme.space[0]}px;

  border-radius: ${p=>p.theme.radii.normal};

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

  margin-top: ${p=>p.theme.space[0]}px;
  margin-right: ${p=>p.theme.space[6]}px;
  margin-bottom: ${p=>p.theme.space[0]}px;
  margin-left: ${p=>p.theme.space[6]}px;

  border-radius: ${p=>p.theme.radii.round};

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

  margin-top: ${p=>p.theme.space[0]}px;
  margin-right: ${p=>p.theme.space[6]}px;
  margin-bottom: ${p=>p.theme.space[0]}px
  margin-left: ${p=>p.theme.space[6]}px;

  border-radius: ${p=>p.theme.radii.normal};

  background-color: rgb(136, 135, 135, 0.5);
`;
export const Name = styled.p`
  display: block;

  margin-top: ${p=>p.theme.space[0]}px;
  margin-right: ${p=>p.theme.space[0]}px;
  margin-bottom: ${p=>p.theme.space[0]}px;
  margin-left: ${p=>p.theme.space[0]}px;

  padding-top: ${p=>p.theme.space[0]}px;
  padding-right: ${p=>p.theme.space[0]}px;
  padding-bottom: ${p=>p.theme.space[0]}px;
  padding-left: ${p=>p.theme.space[0]}px;

  text-align: center;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;
