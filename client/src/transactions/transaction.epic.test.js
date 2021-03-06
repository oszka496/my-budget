import { of, throwError } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import * as requests from 'api/requests';
import { raiseError } from '../message/message.actions';
import { transactionActions as actions } from './transaction.slice';
import { addTransactionEpic } from './transaction.epic';

jest.mock('uuid', () => ({ v4: () => 'uuid' }));

describe('addTransactionEpic', () => {
  let testScheduler;
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('on successful response', () => {
    jest
      .spyOn(requests, 'post')
      .mockImplementation(() => of({}));

    testScheduler.run(({ hot, expectObservable }) => {
      const transaction = '[transaction]';
      const actions$ = hot('---a---|', { a: actions.createStart(transaction) });
      const result$ = addTransactionEpic(actions$);
      expectObservable(result$).toBe('---a---|', { a: actions.createSuccess(transaction) });
    });
  });

  it('on error response', () => {
    jest
      .spyOn(requests, 'post')
      .mockImplementation(() => throwError('error'));

    testScheduler.run(({ hot, expectObservable }) => {
      const transaction = '[transaction]';
      const actions$ = hot('---a---|', { a: actions.createStart(transaction) });
      const result$ = addTransactionEpic(actions$);
      expectObservable(result$).toBe(
        '---(ab)|',
        { a: actions.createError(transaction), b: raiseError('Failed to add transaction') },
      );
    });
  });
});
