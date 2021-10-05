import styles from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.container}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={styles.btn}
          onClick={onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
