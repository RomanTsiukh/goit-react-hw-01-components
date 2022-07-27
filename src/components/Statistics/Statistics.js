import PropTypess from 'prop-types';

export function Statistics(props) {
    const { lab, percent } = props;
    return (
        <>
            <span class="label">{lab}</span>
            <span class="percentage">{percent}%</span>
        </>
    )}

Statistics.propTypes = {
    // id: PropTypess.string,
    lab: PropTypess.string,
    percent: PropTypess.number,
  };