import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function MovieInfo({val, i, page}){

    let navigate = useNavigate();

    function goViews(){
        navigate(`/movies/view/${val.id}`)
    }

    return(
        <div className="box movie-box">
            {
                page == "MovieList" ?                 
                    <div className="rank-box">
                        <span>No. {i+1}</span>
                    </div>
                : null
            }
            <div className="movie-poster">
                <div 
                    className="imgs back-img" style={{ backgroundImage : "url('" + val.image + "')", cursor : "pointer" }}
                    
                    onClick={()=>{if(page == "MovieList"){ goViews(); }}}
                >
                    <img src={"" + val.image } alt={val.title} className="basic-img" />
                </div>
                <div className="level" style={{display : 'none'}}>
                    <b>{i+1}</b>
                </div>
                <div className="agelimit">
                    { val.agelimit == 0 && <img src="/image/static/age_all.svg" alt="전체이용가" /> }
                    { val.agelimit == 1 && <img src="/image/static/age12.svg" alt="12세이용가" /> }
                    { val.agelimit == 2 && <img src="/image/static/age15.svg" alt="15세이용가" /> }
                    { val.agelimit == 3 && <img src="/image/static/age18.svg" alt="18세이용가" /> }
                </div>
                {
                    page == "Main" ?                                         
                        <div className="hover">
                            <Link to={`/movies/view/${val.id}`} className="hv_btn1">상세보기</Link>
                            <Link to="#none" className="hv_btn2">예매하기</Link>
                        </div>
                    : null
                }
            </div>                    
            <div className="movie-info">
                <strong className="txt-els">{val.title}</strong>
                <span>예매율 {val.rsrvrate}%</span>
                {
                    page == "MovieList" ?                 
                        <Link to="">예매하기</Link>
                    : null
                }
            </div>
        </div>
    )
}

export default MovieInfo