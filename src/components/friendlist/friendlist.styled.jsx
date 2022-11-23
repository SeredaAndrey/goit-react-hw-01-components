import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  width: ${p=>p.theme.sizes.width.container};
  height: ${p=>p.theme.sizes.height.container};

  margin-top: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[9]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[9]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
`;
export const Item = styled.li`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  border-radius: ${p => p.theme.radii.normal};

  align-items: center;

  background-color: ${p => p.theme.color.background};

  display: flex;

  height: ${p=>p.theme.sizes.height.friendsItem};

  list-style-type: none;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;
export const Status = styled.span`
  width: ${p=>p.theme.sizes.width.statusSpan};
  height: ${p=>p.theme.sizes.height.statusSpan};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[6]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[6]};

  border-radius: ${p => p.theme.radii.round};

  background-color: ${p=>{
  return p.statusOnline ? p.theme.color.online : p.theme.color.offline;}
  }
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[6]};
  margin-bottom: ${p => p.theme.space[0]}
  margin-left: ${p => p.theme.space[6]};

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.color.backgroundAccent};
`;
export const Name = styled.p`
  display: block;

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
