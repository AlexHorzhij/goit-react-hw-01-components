import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'


import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem'

export function TransactionHistory({items}) {
    return <table className={css.transactionHistory}>
  <thead className={css.header}>
    <tr >
      <th className={css.headerItem}>Type</th>
      <th className={css.headerItem}>Amount</th>
      <th className={css.headerItem}>Currency</th>
    </tr>
  </thead>

    <tbody>
    {items.map((item, index) => (<tr key={item.id} className={index%2 ===0 ? css.table1 : css.table2}><TransactionHistoryItem item={item}/></tr>))}
   </tbody>
</table>
}

TransactionHistoryItem.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
}
