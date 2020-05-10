import PropTypes from 'prop-types';

const TransactionModel = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  categoryName: PropTypes.string,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
});

export default TransactionModel;
