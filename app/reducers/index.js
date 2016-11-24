import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import loginModalVisible from './loginModalVisible';
import aboutModalVisible from './aboutModalVisible';
import registerModalVisible from './registerModalVisible';


const rootReducer = combineReducers({
  routing: routerReducer,
  loginModalVisible,
  aboutModalVisible,
  registerModalVisible,
});

export default rootReducer;
