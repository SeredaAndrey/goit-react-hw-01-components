import styled from '@emotion/styled';

export const Profile = styled.div`
  width: 600px;
  height: fit-content;

  margin-top: ${p => p.theme.space[5]}px;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-left: auto;

  border-radius: ${p => p.theme.radii.normal};
`;
export const Description = styled.div`
  padding-top: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[6]}px;

  border-top-left-radius: ${p => p.theme.radii.normal};
  border-top-right-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.color.background};
`;
export const Avatar = styled.img`
  display: block;

  width: 200px;
  height: 200px;

  margin-top: ${p => p.theme.space[0]}px;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;

  border-radius: ${p => p.theme.radii.round};

  background-color: #fff;
`;
export const Name = styled.p`
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
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: rgba(0, 0, 0, 0.8);
`;
export const Tag = styled.p`
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
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: rgba(0, 0, 0, 0.5);
`;
export const Location = styled.p`
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
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: rgba(0, 0, 0, 0.5);
`;
export const Stats = styled.ul`
  margin-top: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[0]}px;

  padding-top: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;

  display: flex;

  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.color.backgroundAccent};
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
export const Quantity = styled.span`
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
