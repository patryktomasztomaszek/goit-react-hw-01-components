import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.scss';

function Transactions({ transactionsData }) {
  const headers = Object.keys(transactionsData[0]);

  const {
    transactions,
    transactions__table,
    table__head,
    table__header,
    table__row,
    table__cell,
  } = styles;
  return (
    <section className={transactions}>
      {transactionsData.length > 0 ? (
        <table className={transactions__table}>
          <thead className={table__head}>
            <tr className={table__row}>
              {headers.map(header => {
                if (header !== 'id') {
                  return (
                    <th className={table__header} key={header}>
                      {header}
                    </th>
                  );
                }
                return null;
              })}
            </tr>
          </thead>
          <tbody>
            {transactionsData.map(transaction => {
              const { id, type, amount, currency } = transaction;

              return (
                <tr className={table__row} key={id}>
                  <td className={table__cell}>{type}</td>
                  <td className={table__cell}>{amount}</td>
                  <td className={table__cell}>{currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No transactions!</p>
      )}
    </section>
  );
}

Transactions.propTypes = {
  transactionsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Transactions;
