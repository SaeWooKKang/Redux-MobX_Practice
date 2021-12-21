const {createStore, applyMiddleware} = require('redux');

//리듀서는 한 파일에 모아서 한 번에 임포트 함
const reducer = require('./reducers/index');

// 액션은 잘 import 하고 있어 
const { addPost} = require('./actions/post');
const {logIn, logOut} = require('./actions/user');


// 초기값
const initialState = {
  user: {
    isLogginIn: true,
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

// function firstMiddleware(store) {
//   return function(next){
//     return function(action){

//     }
//   }
// }
const thunkMiddleware = (store) =>(dispatch) =>(action) =>{
  if (typeof action === 'function'){ // 비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
}
const enhancer = applyMiddleware(
  firstMiddleware,
  thunkMiddleware);

// store
const store = createStore(reducer, initialState, enhancer);
store.subscribe( ()=>{ // react-redux 안에 들어있음
  console.log('changed'); // 화면 바꿔주는 코드 여기서
});

console.log('1st', store.getState());

//----------------------


store.dispatch(logIn({
  id:1,
  name: 'pac',
  admin: true,
}));
console.log('2nd', store.getState());

// store.dispatch(addPost({
//   userId:1,
//   id: 1,
//   content: 'hellow ',
// }));
// console.log('3th', store.getState());

// store.dispatch(logOut());
// console.log('4th', store.getState());


