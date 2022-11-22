import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHead,
  TableData,
  TableRowHead,
  TableRowData,
} from './transactionhistory.styled';

export const TransactionHistory = ({ items }) => {
  //   console.log(items);
  return (
    <TransactionHistoryTable>
      <thead>
        <TableRowHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRowHead>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <TableRowData>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRowData>
  );
};

TransactionHistory.prototype = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
TransactionItem.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
