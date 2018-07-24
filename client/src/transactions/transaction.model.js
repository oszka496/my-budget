import PropTypes from 'prop-types';

const TransactionModel = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
});

export default TransactionModel;
