const {createSlice } = require('@reduxjs/toolkit');
const {logIn} = require('../actions/user');

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userReducer  = (prevState = initialState, action) =>{ 
  switch (action.type){
    case 'LOG_IN_REQUEST':
      return{
        ...prevState,
        isLoggingIn: true,
      };
    case 'LOG_IN_SUCCESS':
      return{
        ...prevState,
        data: action.data,
        isLoggingIn: false,
    };
    case 'LOG_IN_FIALURE':
      return{
        ...prevState,
        data: null,
        isLoggingIn: false,
      };
    case 'LOG_OUT':
      return{
        ...prevState,
        data: null,
      };
      default:
        return prevState; 
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{ // 동기적
    logOut(state, action) {
      state.data = null;
    }
  },
  extraReducers:{ // 비동기적 
    [logIn.pending](state, action) { // user/logIn/pending
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) { 
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) { 
   
    },
  },
});

module.exports = userSlice;

//객체의 동적, 다이나믹 속성