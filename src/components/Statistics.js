import PropTypess from 'prop-types';

export default function Statistics(props) {
    const { id, lab, percent } = props;
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>

            <ul class="stat-list">
                <li class="item">
                    <span class="label">{lab}</span>
                    <span class="percentage">{percent}%</span>
                </li>
                <li class="item">
                    <span class="label">{lab}</span>
                    <span class="percentage">{percent}%</span>
                </li>
                <li class="item">
                    <span class="label">{lab}</span>
                    <span class="percentage">{percent}%</span>
                </li>
                <li class="item">
                    <span class="label">{lab}</span>
                    <span class="percentage">{percent}%</span>
                </li>
            </ul>
</section>
    )
}

Statistics.propTypes = {
    id: PropTypess.string,
    lab: PropTypess.string,
    percent: PropTypess.number,
  };