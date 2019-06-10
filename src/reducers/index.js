import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import headerNavbar from './navbarReducer';

const rootReducer = combineReducers({
  headerNavbar,
  form
});

export default rootReducer;