import MovieListModel from '/js/model/MovieListModel.js';
import MovieItemModel from '/js/model/MovieItemModel.js';
import MovieListView from '../view/MovieListView.js';
import MovieDetailView from '../view/MovieDetailView.js';

class Controller {
    constructor(){
        this.movieListModel = new MovieListModel();
        this.movieListView = new MovieListView(this);
        this.movieDetailView = new MovieDetailView(this);
        this.movieItemModel = new MovieItemModel();
        Controller.movieObjects = [];
        
    }
    init(){        
        this.movieListModel.fetchUpcomingMovie(this.movieListModel.key)
            .then(data => this.getUpcomingMovieData(data))
            .then(data => this.displayMovieList(data));
    }

    displayMovieDetail(id){
        this.movieItemModel.getMovieDetail(id,this.movieItemModel.key)
            .then((movieObj)=>this.movieDetailView.getItemTemplate(movieObj))
            .then((template) => this.movieDetailView.render(template));
        
    }

    displayMovieList (movieObjects){
        const templates = [];
        for(const movieObj of movieObjects){
            templates.push(this.movieListView.getItemTemplate(movieObj));
        }

        this.movieListView.render(templates);
    }
    getUpcomingMovieData(data){
        const movieObjects = [];
        for (let movie of data) {
            const movieObj = new MovieItemModel(movie.id,movie.title, movie.poster_path, movie.overview, "");
            movieObjects.push(movieObj);
        }
        return movieObjects;
    }

    
}

export default Controller;