import { addCommentActions, addCommentReducer } from './AddCommentSlice';
import { AddCommentSchema } from '../types/AddCommentSchema';

describe('AddCommentSlice.test', () => {
  test('set comment text', () => {
    const state: AddCommentSchema = {
      text: '',
    };

    expect(
      addCommentReducer(
        state,
        addCommentActions.setCommentText('comment text'),
      ),
    ).toEqual({ text: 'comment text' });
  });
});
