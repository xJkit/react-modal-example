import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import loginModalVisible from './loginModalVisible';
import aboutModalVisible from './aboutModalVisible';


const rootReducer = combineReducers({
  routing: routerReducer,
  loginModalVisible,
  aboutModalVisible,
});

export default rootReducer;
