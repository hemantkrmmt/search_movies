import React from 'react';
const Movies = (props) => {
    return (<div className="movies">{props.data.map((result,index)=>{
        return result
      })}</div>);
}
 
export default Movies;

