import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function StatisticsList(props) {
    const { title, stats } = props;

    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
        
        <ul className={css.statlist}>
            {stats.map(item => (
                <li key={item.id} className={css.item}>
                    <Statistics 
                        lab={item.label}
                        percent={item.percentage}
                    />
                </li>
            ))}
            </ul>
        </section>
    )};

    StatisticsList.propTypes = {
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired
            })
        )};