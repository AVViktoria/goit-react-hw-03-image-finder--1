import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

function Button({ onNextFetch }) {
  return (
    <button className={css.buttonLoadMore} type="button" onClick={onNextFetch}>
      Load more
    </button>
  );
}

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;
