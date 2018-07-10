import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import TransactionItem from './TransactionItem';
import { selectTransactionsAll } from '../transaction.selectors';
import { listOf } from '../../hocs';

const mapStateToProps = state => ({ items: selectTransactionsAll(state) });

const mapDispatchToProps = dispatch => ({});

const TransactionList = listOf(ListGroup, TransactionItem);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList);
