import { deposits } from '../data/deposits';

export default (state = deposits, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
