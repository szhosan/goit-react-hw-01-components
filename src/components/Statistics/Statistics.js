import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from '../GetRandomHexColor/GetRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(item => (
          <li key={item.id} style={{backgroundColor: randomColor()}}  className={s.item}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage+"%"}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {stats: PropTypes.array.isRequired};

export default Statistics;