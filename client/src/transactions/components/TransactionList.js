import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import { selectTransactionsWithCategories } from '../transaction.selectors';
import { listOf, withDataFrom, withLoadingSpinner } from '../../hocs';
import { transactionsDelete, transactionsFetched } from '../transaction.actions';
import api from '../../api';
import TransactionModel from '../transaction.model';

const mapStateToProps = state => ({
  items: selectTransactionsWithCategories(state),
  isLoaded: state.transactions.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: transactions => dispatch(transactionsFetched(transactions)),
  onItemDelete: id => dispatch(transactionsDelete(id)),
});

const TRANSACTIONS_API = api.transaction.list();
const TransactionList = withDataFrom(TRANSACTIONS_API)(
  withLoadingSpinner(listOf(ListGroup, TransactionItem)),
);

TransactionList.propTypes = {
  onDataFetched: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(TransactionModel).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionList);
