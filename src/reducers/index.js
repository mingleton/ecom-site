import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import HeaderNavbar from './navbarReducer';

const rootReducer = combineReducers({
  HeaderNavbar,
  form
});

export default rootReducer;