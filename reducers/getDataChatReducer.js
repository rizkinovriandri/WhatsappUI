// Reducer Kedua
const initialChatData = {};

const getDataChatReducer = (state = initialChatData, action) => {
  if (action.type === 'GET_DATA_CHAT') {
    
      return action.chat;
    
  }
  return state;
}

export default getDataChatReducer;