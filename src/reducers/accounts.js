import { accounts } from '../data/accounts';

export default (state = accounts, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
