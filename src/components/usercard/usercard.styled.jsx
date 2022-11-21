import styled from '@emotion/styled';

export const Profile = styled.div`
  width: 400px;
  height: fit-content;

  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 10px;
`;
export const Description = styled.div`
  padding: 50px 75px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgb(234, 234, 234);
`;
export const Avatar = styled.img`
  display: block;

  width: 200px;
  height: 200px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  border-radius: 50%;

  background-color: #fff;
`;
export const Name = styled.p`
  margin: 0 0 20px 0;
  padding: 0;

  text-align: center;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;
export const Tag = styled.p`
  margin: 0 0 20px 0;
  padding: 0;
  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 400;

  color: rgba(0, 0, 0, 0.5);
`;
export const Location = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.5);
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: rgb(136, 135, 135, 0.5);
`;
export const StatsItem = styled.li`
  display: flex;

  width: calc(100% / 3);
  height: 120px;

  flex-direction: column;

  list-style-type: none;

  justify-content: center;

  &:not(:last-child) {
  border-right: 1px rgba(0, 0, 0, 0.1) solid;
`;
export const Label = styled.span`
  margin: 0 0 12px 0;
  padding: 0;
  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.5);
`;
export const Quantity = styled.span`
  margin: 0;
  padding: 0;
  text-align: center;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;
