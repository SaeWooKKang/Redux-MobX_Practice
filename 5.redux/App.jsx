import React, {useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
const {logIn, logOut} = require('./actions/user');
const userSlice = require('./reducers/user');

const App = () =>{
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(logIn({
      id: 'pac',
      password: '123',
    }));
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  return (
    <div>
      {user.isLoggingIn
      ? <div>로그인 중</div>
      : user.data
      ? <div>{user.data.nickname}</div>
      : '로그인 해주세요.'}
     {!user.data 
        ? <button button onClick={onClick}>로그인 </button>
        : <button button onClick={onLogout}>로그아웃 </button>}
    </div>
  );
};

export default App;