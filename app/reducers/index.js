import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import loginModalVisible from './loginModalVisible';


const rootReducer = combineReducers({
  routing: routerReducer,
  loginModalVisible,
});

export default rootReducer;
