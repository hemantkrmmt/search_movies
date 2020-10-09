import React from 'react';
import backImage  from '../assets/backbutton.png'

const SelectedMovie = (props) => {
    return <>
            
            <div className="jumbotron jumbotron-fluid">
                <div className="container" style={{margin:"0px 10%" }}>
                <img src={backImage} className="SelectedMovieBack" onClick={props.handleGoBack} alt=""/>
                
                    <div>{props.selectedMovieData.backdrop_path?<img  alt="" className="selectedMovieImage" src={"http://image.tmdb.org/t/p/w185"+props.selectedMovieData.backdrop_path}/>:""}</div>
                    
                    <span style={{ fontSize: "20px", textDecoration: "underline" }}><strong>{props.selectedMovieData.title}</strong></span><br/>
    <strong>Released: </strong> {props.selectedMovieData.release_date} <br />
    <strong>Popularity: </strong> {props.selectedMovieData.popularity}
    <p style={{ fontStyle: "italic" }}>{props.selectedMovieData.overview}</p>
                </div>
            </div>
        </>
}
 
export default SelectedMovie;