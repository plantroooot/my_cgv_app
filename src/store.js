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
      image : "/image/movies/86072_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "1",
      runningtime : "",
      release : "2022.12.14",
      id : "123",
      rsrvrate : 82.1,
      scndstate : 1,

    },
    {
      title : "영웅",
      entitle : "",
      image : "/image/movies/83203_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "1",
      runningtime : "",
      release : "2022.12.21",
      id : "1",
      rsrvrate : 11,
      scndstate : 0,

    },
    {
      title : "올빼미",
      entitle : "",
      image : "/image/movies/86481_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "2",
      runningtime : "",
      release : "2022.11.23",
      id : "2",
      rsrvrate : 1.5,
      scndstate : 1,

    },
    {
      title : "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
      entitle : "",
      image : "/image/movies/86503_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "1",
      runningtime : "",
      release : "2022.11.30",
      id : "3",
      rsrvrate : 1.3,
      scndstate : 1,

    },
    {
      title : "젠틀맨",
      entitle : "",
      image : "/image/movies/86706_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "2",
      runningtime : "",
      release : "2022.12.28",
      id : "4",
      rsrvrate : 1.0,
      scndstate : 1,

    },
    {
      title : "신비아파트 극장판 차원도깨비와 7개의 세계",
      entitle : "",
      image : "/image/movies/86670_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      release : "2023.01.04",
      id : "5",
      rsrvrate : 0.8,
      scndstate : 1,

    },
    {
      title : "몬스터 신부-101번째 프로포즈",
      entitle : "",
      image : "/image/movies/86488_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      release : "2022.12.28",
      id : "6",
      rsrvrate : 0.7,
      scndstate : 0,

    },
    {
      title : "눈의 여왕5-스노우 프린세스와 미러랜드의 비밀",
      entitle : "",
      image : "/image/movies/86679_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      release : "2022.12.22",
      id : "7",
      rsrvrate : 0.6,
      scndstate : 0,

    },
    {
      title : "핑크퐁 시네마 콘서트 2-원더스타 콘서트 대작전 ",
      entitle : "",
      image : "/image/movies/86535_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "0",
      runningtime : "",
      release : "2022.12.21",
      id : "8",
      rsrvrate : 0.4,
      scndstate : 0,

    },
    {
      title : "코르사주",
      entitle : "",
      image : "/image/movies/86699_320.jpg",
      director : "",
      actor : "",
      genre : "",
      agelimit : "2",
      runningtime : "",
      release : "2022.12.21",
      id : "9",
      rsrvrate : 0.1,
      scndstate : 0,

    }
  ],
  reducers :{    
    setMovieData(state, actions){
      state = actions.payload;
      //console.log(state.length)
      if(state.length > 0){
        return state
      }
    },
    setMovieChart(state, actions){
      //배열안의 10개 영화정보를 뿌리고 예매율 순으로 정리해주세요.
      let copyState2 = [...actions.payload];
      let movieChart = copyState2.filter( value => value.rsrvrate > 0);
      sortMovieChart();
      return movieChart
    },
    sortMovieChart(state, actions){
      //console.log(state.length);
      state.sort(function(a, b){
        return b.rsrvrate*10 - a.rsrvrate*10
      });
    },
    setReadyMovie(state, actions){
      let copyState = [...actions.payload];
      let readyMovie = copyState.filter( value => value.scndstate === 0)
      return readyMovie
    }
  }
});

export let { setMovieData, setMovieChart, sortMovieChart, setReadyMovie } = movies.actions

let userInfo = createSlice({
  name :'userInfo',
  initialState :
    {
      nickname : 'min',
      avatar : '/image/static/img_avatar.png'
    }
});

/**
 * 1. case - 이벤트 분류
 * (0 : 스페셜이벤트, 1 : 영화/예매, 2 : 멤버십/CLUB, 3 : CGV 극장별, 4 : 제휴/할인)
 * 2. expose - 메인 노출여부
 * (true : 노출, false : 비노출)
 */

let event = createSlice({
  name : 'event',
  initialState : [
    {
      title : '[갱스 오브 런던 시즌2] CGV VIP 시사회',
      image : '/image/event/16708348899560.jpg',
      case : 1,
      date : '2022.11.17 ~ 2022.12.31',
      link : '/',
      expose : false
    },
    {
      title : '쉽고 많은 혜택, [CGV VIP 가보자고!]',
      case : 1,
      image : '/image/event/16686452113660.jpg',
      date : '2022.11.17 ~ 2022.12.31',
      link : '/',
      expose : true
    },
    {
      title : 'CGV x TVING 월정기 혜택 [CGV PLUS]',
      case : 1,
      image : '/image/event/16684735828540.jpg',
      date : '2022.12.02 ~ 2032.12.02',
      link : '/',
      expose : true
    },
    {
      title : '[영웅] 필름마크',
      image : '/image/event/16710665279180.jpg',
      case : 1,
      date : '2022.12.21 ~ 2023.01.08',
      link : '/',
      expose : true
    },
    {
      title : '[아바타: 물의 길] 필름마크',
      image : '/image/event/16710664376680.jpg',
      case : 1,
      date : '2022.12.21 ~ 2023.01.08',
      link : '/',
      expose : true
    },
    {
      title : '[아바타:물의 길] 4DX 스페셜 굿즈',
      image : '/image/event/16710865012840.jpg',
      case : 1,
      date : '2022.12.21 ~ 2022.12.27',
      link : '/',
      expose : true
    },
    {
      title : '[아바타:물의 길] SX 스페셜 굿즈',
      image : '/image/event/16710864380080.jpg',
      case : 1,
      date : '',
      link : '/',
      expose : true
    },

  ]
});

let theater = createSlice({
  name : 'theater',
  initialState :[
    {
      name : 'SUITE CINEMA',
      image : '/image/theater/16390080561620.png',
      link : '',
      isMain : true,
      hash1 : '#호텔 컨셉의 프리미엄관'
    },
    {
      name : 'CINE & LIVINGROOM',
      image : '/image/theater/16553622935690.png',
      link : '',
      isMain : true,
      hash1 : '#신개념 소셜 상영관'
    },
    {
      name : '4DX',
      image : '/image/theater/16382612660240.png',
      link : '',
      isMain : true,
      hash1 : '#모션시트 #오감체험'
    },
    {
      name : 'CINE de CHEF',
      image : '/image/theater/16382612660560.png',
      link : '',
      isMain : true,
      hash1 : '#쉐프가 있는 영화관'
    }
  ] 
});

let ftads = createSlice({
  name : 'ftads',
  initialState : {
    title : '우리가 바라던 내차팔기, 헤이딜러',
    image : '/image/ad/img_ad1.png',
    link : 'https://www.youtube.com/watch?v=k28qSawg-Nw'
  }
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
    theater : theater.reducer,
    ftads : ftads.reducer,
    loginCheck : loginCheck.reducer,
  }
});