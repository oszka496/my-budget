import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listOf } from '../../hocs';
import { selectMessages } from '../message.selectors';
import { dismissMessage } from '../message.actions';
import { MessageItem } from './MessageItem';

const mapStateToProps = (state) => ({
  items: selectMessages(state),
});

const mapDispatchToProps = dispatch => ({
  onDismiss: id => dispatch(dismissMessage(id)),
});

const MessageListBody = listOf(ListGroup, MessageItem);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageListBody);
