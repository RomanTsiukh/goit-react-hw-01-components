import PropTypes from 'prop-types';

export function Statistics(props) {
    const { lab, percent } = props;
    return (
        <>
            <span class="label">{lab}</span>
            <span class="percentage">{percent}%</span>
        </>
    )}

Statistics.propTypes = {
    id: PropTypes.string,
    lab: PropTypes.string,
    percent: PropTypes.number,
  };