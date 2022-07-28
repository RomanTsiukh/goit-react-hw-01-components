import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';

export function StatisticsList(props) {
    const { title, stats } = props;

    return (
        <section class="statistics">
            {title && (<h2 class="title">{title}</h2>)}
        
        <ul class="stat-list">
            {stats.map(item => (
                <li key={item.id} class="item">
                    <Statistics 
                        lab={item.label}
                        percent={item.percentage}
                    />
                </li>
            ))}
            </ul>
        </section>
    )}

    StatisticsList.propTypes = {
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired
            })
        )
    }