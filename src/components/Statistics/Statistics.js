import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export function Statistics(props) {
    const { lab, percent } = props;
    return (
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{lab}</span>
            <span className={css.percentage}>{percent}%</span>
        </li>
    )}

Statistics.propTypes = {
    lab: PropTypes.node.isRequired,
    percent: PropTypes.number.isRequired,
  };