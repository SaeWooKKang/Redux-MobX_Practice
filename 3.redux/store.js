const {createStore, applyMiddleware, compose} = require('redux');

//리듀서는 한 파일에 모아서 한 번에 임포트 함
const reducer = require('./reducers/index');

// 액션은 잘 import 하고 있어 
const { addPost} = require('./actions/post');
const {logIn, logOut} = require('./actions/user');
const {composeWithDevTools} = require('redux-devtools-extension');

// 초기값
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store)=> (dispatch)=> (action) =>{
  console.log('액션 로깅:', action);
  // 기능 추가
  dispatch(action); // 기본 동작 하는 것 
  // 기능 추가 
 // console.log('액션 끝:', action)
};
const thunkMiddleware = (store) =>(dispatch) =>(action) =>{
  if (typeof action === 'function'){ // 비동기
    console.log('성크 미들웨어 ');
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
}
const enhancer = process.env.NODE_ENV === 'production' ?
compose( // 배포 환경
  applyMiddleware(
    firstMiddleware,
    thunkMiddleware
  )
)
: composeWithDevTools( // 개발 환경
  applyMiddleware(
    firstMiddleware,
    thunkMiddleware
  )
);

// store
const store = createStore(reducer, initialState, enhancer);

module.exports = store;