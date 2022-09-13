import PropTypes from 'prop-types'

import css from './TransactionHistoryItem.module.css'

export function TransactionHistoryItem( { item } ) {
    const {type, amount, currency} = item
    return  <>
        <td className={css.row}>{type}</td>
        <td className={css.row}>{amount}</td>
        <td className={css.row}>{currency}</td>
    </>

}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string,
}
