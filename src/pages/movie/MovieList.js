
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { sortMovieChart } from './../../store.js';
import MovieInfo from './../../components/MovieInfo.js';

function MovieList(){
    let [filter, setFilter] = useState(0);
    let dispatch = useDispatch();
    let state = useSelector((state) => state.movies );

    useEffect(() => {
        dispatch(sortMovieChart());
    })

    return(
        <div id="sub" className="movie-idx">
            <div className="sec_wrap">
                <div className="section section1">
                    <div className="size">
                        <div className="inner">
                            <div className="title-area">
                                <div className="tit-box">
                                    <h2>무비차트</h2>
                                </div>
                                <div className="filter">
                                    <ul className="clear">
                                        <li>
                                            <a href="#!" className={ filter == 0 ? "on" : null } onClick={()=>{ setFilter(0); }}>무비차트</a>
                                        </li>
                                        <li>
                                            <a href="#!" className={ filter == 1 ? "on" : null } onClick={()=>{ setFilter(1); }}>상영예정작</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cont-area">
                                <div className="list-area">
                                    <ol className="clear">
                                        {state.map((val, i)=>{
                                            return(
                                                <li key={i}>
                                                    <MovieInfo val={val} i={i} page={"MovieList"}></MovieInfo>
                                                </li>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList