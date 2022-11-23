import styled from '@emotion/styled';

export const StatisticConatiner = styled.section`
  width: 600px;
  height: fit-content;

  margin-top: 50px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;

  border-radius: 10px;

  overflow: hidden;
`;
export const Title = styled.h2`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  padding-top: 30px;
  padding-right: 50px;
  padding-bottom: 30px;
  padding-left: 50px;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  text-transform: uppercase;

  text-align: center;

  color: rgba(0, 0, 0, 0.8);

  background-color: rgb(234, 234, 234);
`;
export const StatList = styled.ul`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;

  display: flex;

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
export const StatPercentage = styled.span`
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
