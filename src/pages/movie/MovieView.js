import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function MovieView({mvinfo}){
    
    let {id} = useParams();
    let mvView = mvinfo.find(function(rst){
        return rst.id == id;
    });
    
    return(
        <div id="sub" className="movie-view">
            <div className="sec_wrap">
                <div className="section section1">
                    <div className="size">
                        <div className="inner">
                           {mvView.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieView