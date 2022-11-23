import styled from '@emotion/styled';

export const StatisticConatiner = styled.section`
  width: 600px;
  height: fit-content;

  margin-top: ${p => p.theme.space[5]}px;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-left: auto;

  border-radius: ${p => p.theme.radii.normal};

  overflow: hidden;
`;
export const Title = styled.h2`
  margin-top: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-left: ${p => p.theme.space[0]}px;

  padding-top: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[6]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  text-transform: uppercase;

  text-align: center;

  color: rgba(0, 0, 0, 0.8);

  background-color: ${p => p.theme.color.background};
`;
export const StatList = styled.ul`
  margin-top: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-left: ${p => p.theme.space[0]}px

  padding-top: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;

  display: flex;

  background-color: ${p => p.theme.color.backgroundAccent};
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
  margin-top: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[0]}px;

  padding-top: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: rgba(0, 0, 0, 0.5);
`;
export const StatPercentage = styled.span`
  margin-top: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-left: ${p => p.theme.space[0]}px;

  padding-top: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: rgba(0, 0, 0, 0.8);
`;
