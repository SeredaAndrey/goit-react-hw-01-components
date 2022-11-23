import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: ${p=>p.theme.sizes.width.container};
  height: ${p=>p.theme.sizes.height.container};

  margin-top: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[9]};
  margin-bottom: ${p => p.theme.space[5]};
  margin-left: ${p => p.theme.space[9]};

  border-collapse: collapse;

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.color.background};

  overflow: hidden;
`;
export const TableHead = styled.th`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  text-align: center;

  color: ${p => p.theme.color.secondary};
`;
export const TableRowHead = styled.tr`
  height: ${p=>p.theme.sizes.height.tableHead};
  background-color: ${p => p.theme.color.backgroundAccent};
`;
export const TableRowData = styled.tr`
  height: ${p=>p.theme.sizes.height.tableData};
  color: ${p => p.theme.color.primary};

  &:nth-of-type(odd) {
    background-color: ${p => p.theme.color.backgroundTableAccent};
  }
  &:nth-of-type(even) {
    background-color: ${p => p.theme.color.background};
  }
  &:last-child {
    border-radius: ${p => p.theme.radii.normal};
  }
`;
export const TableData = styled.td`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  text-align: center;
`;
