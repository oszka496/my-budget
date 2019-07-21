import PropTypes from 'prop-types';

const TransactionModel = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.number,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
});

export default TransactionModel;
