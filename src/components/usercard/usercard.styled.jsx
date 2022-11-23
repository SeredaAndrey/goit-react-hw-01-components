import styled from '@emotion/styled';

export const Profile = styled.div`
  width: 600px;
  height: fit-content;

  margin-top: 50px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;

  border-radius: 10px;
`;
export const Description = styled.div`
  padding-top: 30px;
  padding-right: 50px;
  padding-bottom: 30px;
  padding-left: 50px;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: rgb(234, 234, 234);
`;
export const Avatar = styled.img`
  display: block;

  width: 200px;
  height: 200px;

  margin-top: 0;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;

  border-radius: 50%;

  background-color: #fff;
`;
export const Name = styled.p`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 20px;
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
export const Tag = styled.p`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 20px;
  margin-left: 0;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 400;

  color: rgba(0, 0, 0, 0.5);
`;
export const Location = styled.p`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 20px;
  margin-left: 0;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.5);
`;
export const Stats = styled.ul`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 20px;
  margin-left: 0;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

  display: flex;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: rgb(136, 135, 135, 0.5);
`;
export const StatsItem = styled.li`
  display: flex;

  width: calc(100% / 3);
  height: 80px;

  flex-direction: column;

  list-style-type: none;

  justify-content: center;

  &:not(:last-child) {
  border-right: 1px rgba(0, 0, 0, 0.1) solid;
`;
export const Label = styled.span`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 12px;
  margin-left: 0;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.5);
`;
export const Quantity = styled.span`
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
