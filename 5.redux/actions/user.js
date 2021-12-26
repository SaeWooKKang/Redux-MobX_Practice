// 비동기 액션 공간
const {createAsyncThunk, isPending} =require('@reduxjs/toolkit');
import 'regenerator-runtime';

const delay = (time, value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(value);
  }, time);
});

export const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  console.log(data);
  //throw new Error('비밀번호가 트렸습니다.');
  const result = await delay(500,{
    userId: 1,
    nickname: 'pac'
  });
  return result;
});