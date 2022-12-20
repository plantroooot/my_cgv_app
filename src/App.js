import './App.css';
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Main from './pages/Main.js'
import gnb from './gnb.json'


function App() {
  let [loginCheck] = useState(0)
  let state = useSelector((state) => { return state });
  //let [avatar, setAvarta] = useState('/image/img_avatar.png');
  //let dispatch = useDispatch();

  return (
    <div className="App">
      <div className="wrapper">
        <Header state={state}></Header>
        <div className="body-container">
          
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>

            {/* ----------------------------------------------------------------- */}
            <Route path="*" element={<div>존재하지 않는 페이지입니다.</div>}></Route>
          </Routes>
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
                  <div className="imgs back-img" style={{ backgroundImage : `url(${ !state.loginCheck ? '/image/blank_avatar.png' : state.userInfo.avatar})` }}>
                    <img src="/image/blank_avatar.png" alt="기본 이미지" className="basic-img" />
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
                        <Link className={`link-menu ${rst1.linkMenu}`}>
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
              <Link to={state.event[0].eventLink}>
                <div className="event-img back-img" style={{ backgroundImage : `url(${state.event[0].eventImage})` }}>
                  <img src={state.event[0].eventImage} alt="현대카드 이벤트" className="basic-img" />
                </div>
                <div className="event-title">
                  <h5>{state.event[0].eventTitle}</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="btm">
            <ul>
              <li>
                <a href="http://corp.cgv.co.kr/company/cgv/default.aspx" target="_blank">CGV 소개</a>
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
  return(
    <footer>
      <div>Footer</div>
    </footer>
  )
}

export default App;
