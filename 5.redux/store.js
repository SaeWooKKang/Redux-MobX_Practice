const {configureStore, getDefaultMiddleware} = require('@reduxjs/toolkit');

const reducer = require('./reducers');

const firstMiddleware = (store)=> (dispatch)=> (action) =>{
  console.log('액션 로깅:', action);
  dispatch(action); 
};


const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()], //커스텀 미들웨어 + 기존 미들웨어
  devTools: process.env.NODE_ENV !== 'production',
});

module.exports = store;