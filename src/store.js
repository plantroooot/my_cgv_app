import { configureStore,createSlice } from '@reduxjs/toolkit'

let moives = createSlice({
  name : 'movies',
  initialState : '테스트입니다.'
})

let userInfo = createSlice({
  name :'userInfo',
  initialState :
    {
      nickname : 'min',
      avatar : '/image/img_avatar.png'
    }
})

let event = createSlice({
  name : 'event',
  initialState : [
    {
      eventTitle : '[갱스 오브 런던 시즌2] CGV VIP 시사회',
      eventImage : '/image/16708348899560.jpg',
      eventLink : '/'
    }
  ]
});

let loginCheck = createSlice({
  name : 'loginCheck',
  initialState : false
});


export default configureStore({
  reducer: {
    movies : moives.reducer,
    userInfo : userInfo.reducer,
    event : event.reducer,
    loginCheck : loginCheck.reducer,
  }
});