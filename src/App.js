import './App.css';
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// pages
import Main from './pages/Main.js'
import MovieList from './pages/movie/MovieList.js';
import MovieView from './pages/movie/MovieView.js';

import gnb from './gnb.json'
import info from './info.json'



function App() {
  let navigate = useNavigate();
  let [loginCheck] = useState(0)
  let state = useSelector((state) => { return state });
  //let [avatar, setAvarta] = useState('/image/img_avatar.png');
  //let dispatch = useDispatch();
  //let mvInfo = state.movie;

  return (
    <div className="App">
      <div className="wrapper">
        <Header state={state}></Header>
        <div className="body-container">
          
          <Routes>
            <Route path="/" element={<Main navigate={navigate}></Main>}></Route>
            {/* ----------------------------------------------------------------- */}

            <Route path="/movies" element={<MovieList navigate={navigate}></MovieList>}></Route>
            <Route path="/movies/view/:id" element={<MovieView mvinfo={state.movies}></MovieView>}></Route>
            {/* ----------------------------------------------------------------- */}
            <Route path="*" element={<div>존재하지 않는 페이지입니다.</div>}></Route>
          </Routes>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

function Header({state}){
  let pgc = gnb;
  let lgCk = state.loginCheck;
  return(
    <header id="header">
      <div className="inner pretendard">        
        <div className="logo-box">
          <h1>
            <Link to="/">CGV</Link>
          </h1>
        </div>
        <div className="header-cont scroll-1">
          <div className="top">
            <div className="login-box">
              <Link to="/login">
                <div className="avarta">
                  <div className="imgs back-img" style={{ backgroundImage : `url(${ !state.loginCheck ? '/image/static/blank_avatar.png' : state.userInfo.avatar})` }}>
                    <img src="/image/static/blank_avatar.png" alt="기본 이미지" className="basic-img" />
                  </div>
                </div>
                <div className="txt-box">
                  <span>{ !state.loginCheck ? '로그인' : state.userInfo.nickname }</span>
                </div>
              </Link>
            </div> 
            <div className="search-box">
              <form action="" method="post" id="" name="">
                <div className="input-box">
                  <input type="text" id="" name=""/>
                  <span className="svg search-btn">검색</span>
                </div>
              </form>
            </div> 
          </div>
          <div className="mid">             
            <div className="gnb">
              <ul className="depth1">
                {
                  pgc.map((rst1, i)=>{
                    return (
                      <li key={i}>
                        <Link className={`link-menu ${rst1.linkMenu}`} to={`${rst1.link}`}>
                            <span>{rst1.name}</span>
                          </Link>
                        <ul className="depth2">
                          {
                            rst1.depth2.map((rst2, j)=>{
                              return(
                                <li key={j}>
                                  <Link>{rst2.name}</Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="current-event">
              <Link to={state.event[0].link}>
                <div className="event-img back-img" style={{ backgroundImage : `url(${state.event[0].image})` }}>
                  <img src={state.event[0].image} alt="현대카드 이벤트" className="basic-img" />
                </div>
                <div className="event-title">
                  <h5>{state.event[0].title}</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="btm">
            <ul>
              <li>
                <a href="http://corp.cgv.co.kr/company/cgv/default.aspx" target="_blank"  rel="noreferrer">CGV 소개</a>
              </li>
              <li>
                <Link to="/">기프트샵</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="util">
          <ul>
            <li>
                <a href="/" className="go-rsvn gangwonedu">빠른예매</a>
            </li>
            <li>
                <a href="/" className="go-cscenter">고객센터</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

function Footer(){
  let state = useSelector((state) => { return state.ftads });
  let ftsitemap = info;
  return(
    <footer id="footer">
      <div className="ad-area">
        <div className="inner">              
            <div className="img-box">
              <a href="aa" target="_blank" rel="noreferrer">
                <div className="imgs back-img" style={{ backgroundImage : `url(${state.image})` }}>
                  <img src={state.image} alt={state.title} className="basic-img" />
                </div>
            </a>
          </div>
        </div>
      </div>
      <div className="info-area">
        <div className="size">
          <div className="inner">
            <div className="sitemap">
              <ul>
                {
                  ftsitemap.map((val, i)=>{
                    return(                      
                    <li key={i}>
                      <a href={val.link} rel="noreferrer" target="_blank">
                        {
                          i == 6 ? <strong>{val.name}</strong> : val.name
                        }
                        </a>
                    </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="ft-info">
              <div className="info">
                <p className="clear">
                  <span><em>주소</em>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)</span>
                </p>
              </div>
              <div className="info">
                <p className="clear">
                  <span><em>대표이사</em>허민회</span>
                  <span><em>사업자등록번호</em>104-81-45690</span>
                  <span><em>통신판매업신고번호</em>2017-서울용산-0662</span>
                </p>
              </div>
              <div className="info">
                <p className="clear">
                  <span><em>호스팅사업자</em>CJ올리브네트웍스</span>
                  <span><em>개인정보보호책임자</em>심준범</span>
                  <span><em>대표이메일</em>cjcgvmaster@cj.net</span>
                </p>
              </div>
              <div className="info">
                <p className="clear">
                  <span><em>© CJ CGV. All Rights Reserved</em></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App;
