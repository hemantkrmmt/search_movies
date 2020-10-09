import React from 'react';
import logo from '../assets/images.jpg';
import '../SearchMovie.css';
import Movie from './Movie';
import Movies from './Movies';
import SelectedMovie from './SelectedMovie';

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = "77ba5a69a512b9f891bdd61eb0faf825";
const query = "&query=";


class SearchMovie extends React.Component {
  


  initialState="";
  constructor(props) {
    super(props)
    this.state = {
      query:null,
      value: '',
      data: [],
      selectedMovie:'',
      total_pages: null,
      page_num: 1
    };
     this.handleInput = this.handleInput.bind(this); 
    this.myRef= React.createRef();
  }

  fetchMovies=(searchItem)=>{
     fetch(`${URL}${API_KEY}${query}${searchItem}&page=${this.state.page_num}`)
    .then((response)=>{
      return response.json();
    })
      .then(data => {
        // Here you need to use an temporary array to store NeededInfo only 
        let tmpArray = []
        for (var  i = 0; i < data.results.length; i++) {
            tmpArray.push(<Movie key={i} handleSelectedMovie ={this.handleSelectedMovie}  movieData={data.results[i]}></Movie>)
        }

        this.setState({
            data: tmpArray,
            total_pages: data.total_pages
        })
    });
  }



  handleSelectedMovie=(movie_data)=>{
    console.log(movie_data);
     this.setState({
      selectedMovie:movie_data
     }) 
     console.log(this.state.selectedMovie.title)
  }

  nextPage = () => {
    console.log("next clicked");
    if(this.state.data && this.state.page_num < this.state.total_pages) {
      console.log("next inside clicked");
      this.setState({
        page_num: this.state.page_num +1
      }, () => this.fetchMovies(this.state.query))
    }
  }

  previousPage = () => {
    console.log("prev clicked");
    if(this.state.data && this.state.page_num !== 1) {
      console.log("prev inside clicked");
      this.setState({
        page_num: this.state.page_num -1
      }, () => this.fetchMovies(this.state.query))
    }
  }


  handleGoBack=()=>{
    this.setState({
      selectedMovie:this.initialState
    })
  }

  

   handleInput =(event)=> {
    const inputValue = event.target.value;
    if(inputValue!==this.state.query && event.key === 'Enter'){
     this.setState({
       query: inputValue
     },()=> this.fetchMovies(this.state.query));
     
    
  }
}


  render() {
    return (<>
      {!this.state.selectedMovie?<>
          <div className="titleBar">
            <div><img width='100px' alt=""  src={logo}/></div>
            <div><h1>The Movie DB Search</h1></div>
            <div><div className="searchForm justify-content-between">
            <input type="text" className=""  ref={this.myRef} onKeyPress={(e)=>this.handleInput(e)} />
          </div>
          </div>  
            
          </div>
          
         <Movies data = {this.state.data} />
        {this.state.total_pages>1?
         <footer className="footer">
          {this.state.page_num!=1? <button onClick={this.previousPage} className="buttons">Previous Page</button>:""}
          {this.state.page_num!=this.state.total_pages? <button onClick={this.nextPage} className="buttons">Next Page</button>:""}
         </footer>
         :""}
      </>  
    :<SelectedMovie selectedMovieData={this.state.selectedMovie} handleGoBack={this.handleGoBack}/>}
    
     </>
    );
  }
}
export default SearchMovie;
