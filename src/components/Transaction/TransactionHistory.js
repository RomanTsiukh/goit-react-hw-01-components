import PropTypes from 'prop-types';

export function TransactionHistory(props) {
    const { items } = props
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
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