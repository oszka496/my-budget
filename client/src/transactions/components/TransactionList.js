import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import api from 'api';
import { listOf, withDataFrom, withLoadingSpinner } from 'hocs';
import { raiseError } from 'core/message.actions';
import { TransactionItem } from 'transactions/components';
import { selectTransactionsWithCategories } from 'transactions/transaction.selectors';
import { transactionsDelete, transactionsFetched } from 'transactions/transaction.actions';
import TransactionModel from 'transactions/transaction.model';


const mapStateToProps = state => ({
  items: selectTransactionsWithCategories(state).sort((x, y) => new Date(y.date) - new Date(x.date)),
  isLoaded: state.transactions.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: transactions => dispatch(transactionsFetched(transactions)),
  onFetchFailed: error => dispatch(raiseError(error.toString())),
  deleteTransaction: id => deleteTransaction(id, dispatch),
});

const deleteTransaction = (id, dispatch) => {
  api.requests.remove(api.transaction.item(id))
    .then(() => dispatch(transactionsDelete(id)))
    .catch(error => dispatch(raiseError(error.toString()))); // TODO: Clean up
};

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
