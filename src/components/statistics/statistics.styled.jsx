import styled from '@emotion/styled';

export const StatisticConatiner = styled.section`
  width: 600px;
  height: fit-content;

  margin-top: ${p=>p.theme.space[5]}px;
  margin-right: auto;
  margin-bottom: ${p=>p.theme.space[0]}px;
  margin-left: auto;

  border-radius: ${p=>p.theme.radii.normal};

  overflow: hidden;
`;
export const Title = styled.h2`
  margin-top: ${p=>p.theme.space[0]}px;
  margin-right: ${p=>p.theme.space[0]}px;
  margin-bottom: ${p=>p.theme.space[0]}px;
  margin-left: ${p=>p.theme.space[0]}px;

  padding-top: ${p=>p.theme.space[5]}px;
  padding-right: ${p=>p.theme.space[6]}px;
  padding-bottom: ${p=>p.theme.space[5]}px;
  padding-left: ${p=>p.theme.space[6]}px;

  font-family: 'Segoe UI';
  font-size: 24px;
  font-weight: 700;

  text-transform: uppercase;

  text-align: center;

  color: rgba(0, 0, 0, 0.8);

  background-color: rgb(234, 234, 234);
`;
export const StatList = styled.ul`
  margin-top: ${p=>p.theme.space[0]}px;
  margin-right: ${p=>p.theme.space[0]}px;
  margin-bottom: ${p=>p.theme.space[0]}px;
  margin-left: ${p=>p.theme.space[0]}px

  padding-top: ${p=>p.theme.space[0]}px;
  padding-right: ${p=>p.theme.space[0]}px;
  padding-bottom: ${p=>p.theme.space[0]}px;
  padding-left: ${p=>p.theme.space[0]}px;

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
  margin-top: ${p=>p.theme.space[0]}px;
  margin-right: ${p=>p.theme.space[0]}px;
  margin-bottom: ${p=>p.theme.space[4]}px;
  margin-left: ${p=>p.theme.space[0]}px;

  padding-top: ${p=>p.theme.space[0]}px;
  padding-right: ${p=>p.theme.space[0]}px;
  padding-bottom: ${p=>p.theme.space[0]}px;
  padding-left: ${p=>p.theme.space[0]}px;

  text-align: center;

  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 600;

  color: rgba(0, 0, 0, 0.5);
`;
export const StatPercentage = styled.span`
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
