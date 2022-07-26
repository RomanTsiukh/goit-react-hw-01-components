import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export function StatisticsList(props) {
    const { title, stats } = props;

    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
        
            <ul className={css.statlist}>
                {stats.map(item => (
                    <Statistics
                        key={item.id} 
                        lab={item.label}
                        percent={item.percentage}
                    />
                ))}
            </ul>
        </section>
    )};

    StatisticsList.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.node.isRequired
            })
        )
    };