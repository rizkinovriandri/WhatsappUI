// Import combineReducer untuk menggabungkan semua file reducer
import { combineReducers } from 'redux';

// Import all reducer
import getDataChatReducer from './getDataChatReducer';

const rootReducer = combineReducers({
  dataChat: getDataChatReducer,
})

export default rootReducer;
