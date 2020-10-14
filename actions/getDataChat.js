import axios from 'axios';

const getDataChat = () => {
  return (dispatch) => {
    axios.get("https://api.exchangeratesapi.io/latest?base=IDR&symbols=IDR,USD,CAD,JPY,EUR,CHF")
    .then((response) => {
      return dispatch ({
        type: 'GET_DATA_CHAT',
        chat: response.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default getDataChat;