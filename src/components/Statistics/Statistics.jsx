import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from '../../utils/GetRandomHexColor/GetRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{ backgroundColor: randomColor() }}
            className={s.item}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.number,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.string,
    })
  ).isRequired,
};

export default Statistics;
