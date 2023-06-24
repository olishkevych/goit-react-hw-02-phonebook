import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onFilterInput }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.filter}
        placeholder="Search name..."
        onChange={onFilterInput}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
};
