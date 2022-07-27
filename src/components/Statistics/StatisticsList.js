import data from 'components/Statistics/data.json';
import { Statistics } from 'components/Statistics/Statistics';

export function StatisticsList(props) {
    const { items } = props;

    return (
        <section class="statistics">
        <h2 class="title">Upload stats</h2>
        <ul class="stat-list">
            {items.map(item => (
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