import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <section className={styles.transactions}>
    <table className={styles.transaction_history}>
      <thead className={styles.table_head}>
        <tr>
          <th className={styles.table_head__el}>Type</th>
          <th className={styles.table_head__el}>Amount</th>
          <th className={styles.table_head__el}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.list} key={item.id}>
            <td className={styles.item}>{item.type}</td>
            <td className={styles.item}>{item.amount}</td>
            <td className={styles.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
