import { configureStore, createSlice } from '@reduxjs/toolkit'


// let movies = createSlice({
//   name : 'movies',
//   initialState : [
//     {
//       title : "",
//       id : ""
//     }
//   ],
//   reducers :{    
//     setMovieData(state, actions){
//       state = actions.payload;
//       //console.log(state.length)
//       if(state.length > 0){
//         return state
//       }
//     }
//   }
// });

/**
 * agelimit - 상영등급
 *  -> 0 : 전체, 1 : 12세, 2 : 15세, 3 : 19세
 * state - 상영여부
 *  -> 0 : 예매중, 1 : 현재상영중, 2 : 상영종료
 */
let movies = createSlice({
  name : 'movies',
  initialState : [
    {
      title : "아바타-물의 길",
      entitle : "Avatar: The Way of Water",
      image : "86072_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "1",
      runningtime : "",
      comedate : "",
      id : "0",
      rsrvrate : 84.2,
      state : 1,

    },
    {
      title : "영웅",
      entitle : "",
      image : "83203_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "1",
      runningtime : "",
      comedate : "",
      id : "1",
      rsrvrate : 12,
      state : 0,

    },
    {
      title : "올빼미",
      entitle : "",
      image : "86481_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "2",
      runningtime : "",
      comedate : "",
      id : "2",
      rsrvrate : 12,
      state : 1,

    },
    {
      title : "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
      entitle : "",
      image : "86503_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "1",
      runningtime : "",
      comedate : "",
      id : "3",
      rsrvrate : 12,
      state : 1,

    },
    {
      title : "젠틀맨",
      entitle : "",
      image : "86706_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "2",
      runningtime : "",
      comedate : "",
      id : "4",
      rsrvrate : 12,
      state : 1,

    },
    {
      title : "신비아파트 극장판 차원도깨비와 7개의 세계",
      entitle : "",
      image : "86670_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      comedate : "",
      id : "5",
      rsrvrate : 12,
      state : 1,

    },
    {
      title : "몬스터 신부-101번째 프로포즈",
      entitle : "",
      image : "86488_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      comedate : "",
      id : "6",
      rsrvrate : 12,
      state : 0,

    },
    {
      title : "눈의 여왕5-스노우 프린세스와 미러랜드의 비밀",
      entitle : "",
      image : "86679_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      comedate : "",
      id : "7",
      rsrvrate : 12,
      state : 0,

    },
    {
      title : "핑크퐁 시네마 콘서트 2-원더스타 콘서트 대작전 ",
      entitle : "",
      image : "86535_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      comedate : "",
      id : "8",
      rsrvrate : 12,
      state : 0,

    },
    {
      title : "코르사주",
      entitle : "",
      image : "86699_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "2",
      runningtime : "",
      comedate : "",
      id : "9",
      rsrvrate : 12,
      state : 0,

    }
    

  ],
  // reducers :{    
  //   setMovieData(state, actions){
  //     state = actions.payload;
  //     //console.log(state.length)
  //     if(state.length > 0){
  //       return state
  //     }
  //   }
  // }
});

export let { setMovieData } = movies.actions


let userInfo = createSlice({
  name :'userInfo',
  initialState :
    {
      nickname : 'min',
      avatar : '/image/img_avatar.png'
    }
});


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
    movies : movies.reducer,
    userInfo : userInfo.reducer,
    event : event.reducer,
    loginCheck : loginCheck.reducer,
  }
});