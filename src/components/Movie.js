import React from 'react';
const Movie=(props)=>{
        return ( <div className="movie"  onClick={()=>props.handleSelectedMovie(props.movieData)}>
                <img src={`http://image.tmdb.org/t/p/w200${props.movieData.backdrop_path}`}  alt=""/>    
                <div className="movie-title">{props.movieData.title}</div>   
            </div>
        
         );
    
}
 
export default Movie;