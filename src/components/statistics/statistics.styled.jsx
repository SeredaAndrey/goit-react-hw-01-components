import styled from '@emotion/styled';

export const StatisticConatiner = styled.section`
  width: 600px;
  height: fit-content;

  margin: 50px auto 0 auto;

  border-radius: 10px;
`;
export const Title = styled.h2`
  padding: 30px 50px;
  margin: 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  text-transform: uppercase;

  text-align: center;

  color: rgba(0, 0, 0, 0.8);

  background-color: rgb(234, 234, 234);
`;
export const StatList = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: rgb(136, 135, 135, 0.5);
`;
export const StatItem = styled.li`
display: flex;

  width: calc(100% / 5);
  height: 80px;

  flex-direction: column;

  list-style-type: none;

  justify-content: center;

  &:not(:last-child) {
  border-right: 1px rgba(0, 0, 0, 0.1) solid;
`;
export const StatLabel = styled.span`
  margin: 0 0 12px 0;
  padding: 0;
  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.5);
`;
export const StatPercentage = styled.span`
  margin: 0;
  padding: 0;
  text-align: center;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`;
