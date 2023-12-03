import React from 'react';
import {
  TransactionTable,
  TableHead,
  TableBody,
  TableHeaderCell,
  TableCell,
} from './TransactionHistory.styles';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <TableHead>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
          </tr>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

export default TransactionHistory;
