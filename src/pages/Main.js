import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';


function Main(){
    let state = useSelector((state) => { return state });
    let dispatch = useDispatch();    
    let [pause, setPause] = useState('');
    let [sound, setSound] = useState('');
    let mainVideo = useRef();

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


    useEffect(()=>{
        
    });

    
    

    return(
        <div id="main">
            {/* <div>{state.movies}</div> */}
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
            <div className="section section2">
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
                            <SlideForm></SlideForm>
                        </div>
                        
                    </div>
                </div>
            </div>


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

function SlideForm(){
    return(
        <Swiper
            className="movie-slide"
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}


export default Main