import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics(props) {
    const { lab, percent } = props;
    return (
        <>
            <span className={css.label}>{lab}</span>
            <span className={css.percentage}>{percent}%</span>
        </>
    )}

Statistics.propTypes = {
    lab: PropTypes.string,
    percent: PropTypes.number,
  };