import styled from '@emotion/styled';

export const StatisticConatiner = styled.section`
  width: 600px;
  height: fit-content;

  margin-top: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[9]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[9]};

  border-radius: ${p => p.theme.radii.normal};

  overflow: hidden;
`;
export const Title = styled.h2`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[6]};
  padding-bottom: ${p => p.theme.space[5]};
  padding-left: ${p => p.theme.space[6]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  text-transform: uppercase;

  text-align: center;

  color: ${p => p.theme.color.primary};

  background-color: ${p => p.theme.color.background};
`;
export const StatList = styled.ul`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]}

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

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
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.color.border};
  }
`;
export const StatLabel = styled.span`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.secondary};
`;
export const StatPercentage = styled.span`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
`;
