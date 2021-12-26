const {combineReducers} = require('redux');
const userReducer = require('./user');
const postReducer = require('./post');

// 함수를 쪼갤수 없음  -> combineReducers 사용
// combineReducers({
//   user: userReducer,
//   posts: postReducer,
// });

// user, posts는 initialState의 키임
module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});