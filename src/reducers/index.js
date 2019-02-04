import { combineReducers } from 'redux';
import messages from './messages';
import accounts from './accounts';
import deposits from './deposits';

export default combineReducers({
  messages,
  accounts,
  deposits
});
