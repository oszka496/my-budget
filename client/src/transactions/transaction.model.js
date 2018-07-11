import PropTypes from 'prop-types';

const TransactionModel = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  is_income: PropTypes.bool.isRequired, // TODO: Map to camel case
});

export default TransactionModel;
