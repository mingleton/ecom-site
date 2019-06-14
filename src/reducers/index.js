import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import headerNavbar from './navbarReducer';
import user from './userReducer'
import shop from './shopReducer'

const rootReducer = combineReducers({
  headerNavbar,
  user,
  form,
  shop
});

export default rootReducer;