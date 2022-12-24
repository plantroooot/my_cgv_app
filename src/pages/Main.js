import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieData, setMovieChart, sortMovieChart, setReadyMovie } from './../store.js'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import movieData from './../utils/movieData.js';


function Main(){
    let [pause, setPause] = useState('');
    let [sound, setSound] = useState('');
    let mainVideo = useRef();
    let dispatch = useDispatch();
    
    let state = useSelector((state) => { return state.movies });
    useEffect(()=>{
        if(pause === ''){
            mainVideo.current.play();
        }else{
            mainVideo.current.pause();
        }
    },[pause]);

    useEffect(()=>{
        if(sound === ''){
            mainVideo.current.muted = true;
        }else{
            mainVideo.current.muted = false;
        }
    }, [sound]);
    // useEffect(()=>{
    //     axios.get('https://plantroooot.github.io/cgvdata.github.io/movie_data/data.json')
    //     .then((res)=>{
    //         //dispatch(setMovieData( res.data ));
    //         console.log(res.data)
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     });
    // }, []);
    //console.log(state);
    return(
        <div id="main">
            <div className="section section1">
                <div className="size">
                    <div className="inner">
                        <div className="video-wrap">
                            <video ref={mainVideo} muted={true} autoPlay controls={false} loop>
                                <source src="/video/hero_1080x608.mp4" type="video/mp4" />
                            </video>
                            {/* 랜덤재생 */}
                            <div className="movie-info pretendard">
                                <strong onClick={()=>{ test(); }}>영웅</strong>
                                <p>
                                    "120분간 꽉 채운 감동의 전율" <br />
                                    대한민국 자긍심! 예매 전격 오픈!
                                </p>
                                <div className="control-box">
                                    <Link to="/" className="sBtn">상세보기</Link>
                                    <button className={ `btn-play ico-bg ${pause}` } onClick={()=>{ setPause(pause !== 'on' ? 'on' : '');} }>일시정지</button>
                                    <button className={ `btn-sound ico-bg ${sound}` } onClick={()=>{ setSound(sound !== 'on' ? 'on' : '');}}>음소거 해제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>      
            <Section5></Section5>    
            {/* <div className="section section">
                <div className="size">
                    <div className="inner">
                        <div className="title-area">
                            <div className="tit-box">
                                <h2></h2>
                            </div>
                            <div className="more-btn">
                                <Link>전체보기</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> */}
        </div>
    )
}

function Title({title, type}){
    let dispatch = useDispatch();
    let [titleOn, setTitleOn] = useState(0);
    let state = useSelector((state) => { return state.movies });
    let movieDataArray = movieData;
    return(
        <div className="title-area">
            {   
                type === "section2" ?
                <div className="tit-box tit-box2">
                    <h3>
                        <a href="#none" className={ titleOn == 0 ? "on" : null } onClick={()=>{ setTitleOn(0); dispatch(setMovieChart(movieDataArray)); }}>{ title[0] }</a>
                    </h3>
                    <h3>
                        <a href="#none" className={ titleOn == 1 ? "on" : null } onClick={()=>{ setTitleOn(1); dispatch(setReadyMovie(movieDataArray)); }}>{ title[1] }</a>
                    </h3>
                </div>
                :
                <div className="tit-box">
                    <h3>{ title }</h3>
                </div>
            }
            <div className="more-btn">
                <Link to="">전체보기</Link>
            </div>
        </div>
    )
}

function SlideForm({type}){
    let dispatch = useDispatch()
    let state = useSelector((state)=>{ return state });

    useEffect(()=>{
        //첫 로딩시 예매율순으로 정렬
        dispatch(sortMovieChart());        
    },[]);

    //무비차트, 상영예정작
    if(type === "section2"){
       return(     
        <Swiper
            spaceBetween={25}
            slidesPerView={5}
            slidesPerGroup={5}
            modules={[Navigation]}
            navigation={true}
            >
            {
                state.movies.length < 0 ? <SwiperSlide>등록된 게시물이 없습니다.</SwiperSlide> 

                : state.movies.map((val, i)=>{
                    return (
                    i < 10 ? //메인 노출 개수
                        <SwiperSlide key={i}>
                            <div className="box">
                                <div className="movie-poster">
                                    <div className="imgs back-img" style={{ backgroundImage : "url('" + val.image + "')" }}>
                                        <img src={"" + val.image } alt={val.title} className="basic-img" />
                                    </div>
                                    <div className="level">
                                        <b>{i+1}</b>
                                    </div>
                                    <div className="agelimit">
                                        { val.agelimit == 0 && <img src="/image/static/age_all.svg" alt="전체이용가" /> }
                                        { val.agelimit == 1 && <img src="/image/static/age12.svg" alt="12세이용가" /> }
                                        { val.agelimit == 2 && <img src="/image/static/age15.svg" alt="15세이용가" /> }
                                        { val.agelimit == 3 && <img src="/image/static/age18.svg" alt="18세이용가" /> }
                                    </div>                          
                                    <div className="hover">
                                        <Link to="#none" className="hv_btn1">상세보기</Link>
                                        <Link to="#none" className="hv_btn2">예매하기</Link>
                                    </div>
                                </div>                    
                                <div className="movie-info">
                                    <strong>{val.title}</strong>
                                    <span>예매율 {val.rsrvrate}%</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    : null
                    )
                })
            }
        </Swiper>
       ) 
    }

    //이벤트
    if(type === "section3"){
        return (
            <Swiper
                spaceBetween={25}
                slidesPerView={3}
                slidesPerGroup={3}
                modules={[Navigation]}
                navigation={true}
                >
                {
                    state.event.map((val, i)=>{                    
                        return(
                        val.expose == true ? //메인 노출 체크된 이벤트만 노출됨.
                            <SwiperSlide key={i}>
                                <div className="box">
                                    <Link to={val.link}>
                                        <div className="event-poster">
                                            <div className="imgs back-img" style={{ backgroundImage : `url(${val.image})` }}>
                                                <img src={`${val.image}`} alt={val.title} className="basic-img" />
                                            </div>
                                        </div>                                        
                                        <div className="event-info">
                                            <strong className="title">{val.title}</strong>
                                            <span className="date">{val.date}</span>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        : null
                        )
                    })
                }
            </Swiper>
        )
    }
}

function Section2(){
    let state = useSelector((state) => { return state.movies });
    return (
        <div className="section section2">
            <div className="size">
                <div className="inner">
                    {/* <div className="title-area">
                        <div className="tit-box">
                            <ul>
                                <li>
                                    <h3>
                                        <a href="#none">무비차트</a>
                                    </h3>
                                </li>
                                <li>
                                    <h3>
                                        <a href="#none">상영예정작</a>
                                    </h3>
                                </li>
                            </ul>
                        </div>
                        <div className="more-btn">
                            <Link to="" className="sBtn">전체보기</Link>
                        </div>
                    </div> */}
                    <Title title={["무비차트", "상영예정작"]} type={"section2"}></Title>
                    <div className="cont-area">
                        <div className="slide-area">
                            <div className="movie-slide">
                                <SlideForm type={"section2"}></SlideForm>
                            </div>                            
                        </div>
                    </div>             
                </div>
            </div>
        </div>
    )
}

function Section3(){
    return (
        <div className="section section3">
            <div className="size">
                <div className="inner">
                    <Title title={"EVENT"} type={"section3"}></Title>
                    <div className="cont-area">
                        <div className="slide-area">
                            <div className="event-slide">
                                <SlideForm  type={"section3"}></SlideForm>
                            </div>
                            
                        </div>
                    </div>             
                </div>
            </div>
        </div>
    )
}

function Section4(){
    let [theaters, setTheaters] = useState(0);
    let state = useSelector((state) => state.theater );
    return (
        <div className="section section4">
            <div className="size">
                <div className="inner">
                    <Title title={"특별관"} type={"section4"}></Title>
                    <div className="cont-area">
                        <div className="theater-area">
                            <div className="left">
                                <Link to="">
                                    <div className="imgs back-img" style={{ backgroundImage : `url(${state[theaters].image})`}}>
                                        <img src={state[theaters].image} alt={state[theaters].name} className="basic-img" />
                                    </div>
                                </Link>
                            </div>
                            <div className="right">
                                <ul>
                                    {
                                        state.map((val, i)=>{
                                            return(
                                                val.isMain == true ? //메인 노출여부
                                                <li key={i} className={theaters == i ? 'active' : ''}>
                                                    <Link to="/" onMouseEnter={()=>{ setTheaters(i) }}>
                                                        <div className="box">
                                                            <em className="title">{val.name}</em>
                                                            <span className="hash-txt">{val.hash1}</span>
                                                        </div>
                                                    </Link>
                                                </li> : null
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>             
                </div>
            </div>
        </div>
    )
}

function Section5(){

    return(
        <div className="section section5">
            <div className="size">
                <div className="inner">
                    <div className="cont-area">
                        <div className="app-area clear">
                            <div className="txt-area">
                                <span>VISION &amp; MISSION</span>
                                <strong>지금 CGV앱을 경험해보세요!</strong>
                            </div>
                            <div className="btn-area">
                                <a href="https://play.google.com/store/apps/details?id=com.cgv.android.movieapp&hl=ko&gl=US" className="app-store" target="_blank" rel="noreferrer">
                                    <img src="/image/static/ico_appstore.svg" alt="IOS 앱 다운" />
                                </a>
                                <a href="https://apps.apple.com/kr/app/cgv/id370441190?l=en" className="google-play" target="_blank" rel="noreferrer">
                                    <img src="/image/static/ico_googleplay.svg" alt="GOOGLE PLAY 앱 다운" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main