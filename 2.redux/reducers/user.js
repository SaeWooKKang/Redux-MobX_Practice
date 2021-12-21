// 초기값 전체를 관리하는게 아니라 구조를 쪼갰음으로, user초기값 세팅

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer  = (prevState = initialState, action) =>{ //새로운 state 만들어주기
  switch (action.type){
    case 'LOG_IN':
      return{
        ...prevState,
        data: action.data,
      };
    case 'LOG_OUT':
      return{
        ...prevState,
        data: null,
      };
      default:
        return prevState; // 오타났을때 해결
  }
};

module.exports = userReducer;