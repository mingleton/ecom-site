import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import headerNavbar from './navbarReducer';
import user from './userReducer'

const rootReducer = combineReducers({
  headerNavbar,
  user,
  form
});

export default rootReducer;