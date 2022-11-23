import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  height: fit-content;

  margin-top: ${p=>p.theme.space[5]}px;
  margin-right: auto;
  margin-bottom: ${p=>p.theme.space[5]}px;
  margin-left: auto;

  border-collapse: collapse;

  border-radius: ${p=>p.theme.radii.normal};

  background-color: ${p=>p.theme.color.background};

  overflow: hidden;
`;
export const TableHead = styled.th`
  font-family: 'Segoe UI';
  font-size: 20px;
  font-weight: 400;

  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`;
export const TableRowHead = styled.tr`
  height: 35px;
  background-color: ${p=>p.theme.color.backgroundAccent};
`;
export const TableRowData = styled.tr`
  height: 25px;
  color: rgba(0, 0, 0, 0.8);

  &:nth-of-type(odd) {
    background-color: ${p=>p.theme.color.backgroundTableAccent};
  }
  &:nth-of-type(even) {
    background-color: ${p=>p.theme.color.background};
  }
  &:last-child {
    border-radius: ${p=>p.theme.radii.normal};
  }
`;
export const TableData = styled.td`
  font-family: 'Segoe UI';
  font-size: 16px;
  font-weight: 400;

  text-align: center;
`;