import APIDataModel from "./APIModel.js";

class Movie extends APIDataModel{
    constructor(id,title,poster,casts,link){
        super();
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.casts = casts;
        this.link =link;        
    }

    getDetailApiUrl(movie_id,key){
        return this.rootURL + this.detail.replace("{movie_id}",movie_id).replace("<<api_key>>",key);
    }

    getMovieDetail(movie_id,key){
        return fetch(this.getDetailApiUrl(movie_id,key))
            .then(res => res.json())
            .then(data => this.convertDataIntoObject(data));
    }

    convertDataIntoObject(data){
        this.id = data.id;
        this.title = data.original_title;
        this.poster = data.poster_path;
        this.casts = data.overview;
        this.link =data.homepage;     

        return this;
    }
    
}

export default Movie;