import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';


export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.text}>Good:</span>
          {good}
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Neutral:</span>
          {neutral}
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Bad:</span>
          {bad}
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Total:</span>
          {total}
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Positive feedback:</span>
          {positivePercentage}%
        </li>
      </ul>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
