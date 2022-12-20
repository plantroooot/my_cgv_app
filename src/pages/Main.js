import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieData } from './../store.js'
import axios from 'axios';


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
    //         dispatch(setMovieData( res.data ));
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
                            <video ref={mainVideo} muted={true} autoPlay controls={false}>
                                <source src="/video/hero_1080x608.mp4" type="video/mp4" />
                            </video>
                            {/* 랜덤재생 */}
                            <div className="movie-info pretendard">
                                <strong>영웅</strong>
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
            {/* <div className="section section2">
                <div className="size">
                    <div className="inner">
                        <div className="title-area">
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
                        </div>
                        <div className="cont_area">
                            <div>
                            </div>                      
                            <SlideForm type={1}></SlideForm>
                        </div>
                        
                    </div>
                </div>
            </div> */}
            
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
    let [titleOn, setTitleOn] = useState(0);

    return(
        <div className="title-area">
            {   
                type === "section2" ?
                <div className="tit-box tit-box2">
                    <h3>
                        <a href="#none" className={ titleOn == 0 ? "on" : null } onClick={()=>{ setTitleOn(0) }}>{ title[0] }</a>
                    </h3>
                    <h3>
                        <a href="#none" className={ titleOn == 1 ? "on" : null } onClick={()=>{ setTitleOn(1) }}>{ title[1] }</a>
                    </h3>
                </div>
                :
                <div className="tit-box">
                    <h3>{ title }</h3>
                </div>
            }
            <div className="more-btn">
                <Link to="" className="sBtn">전체보기</Link>
            </div>
        </div>
    )
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
                            <SlideForm type={1}></SlideForm>
                        </div>                      
                        
                    </div>             
                </div>
            </div>
        </div>
    )
}

function SlideForm({type}){
    let state = useSelector((state)=>{ return state.movies })
    if(type === 1){        
        return(
            <Swiper
                className="movie-slide"
                spaceBetween={25}
                slidesPerView={5}
                //onSlideChange={() => console.log('slide change')}
                //onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                >
                {
                    state.map((val, i)=>{
                        return (                            
                        <SwiperSlide key={i}>
                            <div className="box">
                                <div className="movie-poster">
                                    <div className="imgs back-img" style={{ backgroundImage : "url('/image/" + state[i].image + "')" }}>
                                        <img src={"/image/" + state[i].image } alt={state[i].title} className="basic-img" />
                                    </div>
                                    <div className="level">
                                        <b></b>
                                    </div>
                                    <div className="agelimit">
                                        { state[i].agelimit == 0 && <img src="/image/age_all.svg" alt="" /> }
                                        { state[i].agelimit == 1 && <img src="/image/age12.svg" alt="" /> }
                                        { state[i].agelimit == 2 && <img src="/image/age15.svg" alt="" /> }
                                        { state[i].agelimit == 3 && <img src="/image/age18.svg" alt="" /> }
                                    </div>                          
                                    <div className="hover">
                                        <a href="#none" className="hv_btn1">상세보기</a>
                                        <a href="#none" className="hv_btn2">예매하기</a>
                                    </div>
                                </div>                    
                                <div className="movie-info">
                                    <strong>{state[i].title}</strong>
                                    <span>예매율 {state[i].rsrvrate}%</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        )
    }
}

export default Main