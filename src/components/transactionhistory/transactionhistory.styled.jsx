import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  height: fit-content;

  margin-top: 50px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;

  border-collapse: collapse;

  border-radius: 10px;

  background-color: rgb(234, 234, 234);

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
  background-color: rgb(136, 135, 135, 0.5);
`;
export const TableRowData = styled.tr`
  height: 25px;
  color: rgba(0, 0, 0, 0.8);

  &:nth-of-type(odd) {
    background-color: rgb(136, 135, 135, 0.1);
  }
  &:nth-of-type(even) {
    background-color: rgb(234, 234, 234);
  }
  &:last-child {
    border-radius: 10px;
  }
`;
export const TableData = styled.td`
  font-family: 'Segoe UI';
  font-size: 16px;
  font-weight: 400;

  text-align: center;
`;
