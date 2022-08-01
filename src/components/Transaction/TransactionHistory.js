import PropTypes from 'prop-types';
import css from './Transaction.module.css'

export function TransactionHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={css.type}>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )};

    
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string)
    )};