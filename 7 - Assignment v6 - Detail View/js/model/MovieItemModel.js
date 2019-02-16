import APIDataModel from "./APIModel.js";

class Movie extends APIDataModel{
    constructor(id,title,poster,overview,link){
        super();
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.overview = overview;
        this.link =link;        
    }
    

    getDetailApiUrl(movie_id,key){
        return this.rootURL + this.detail.replace("{movie_id}",movie_id).replace("<<api_key>>",key);
    }

    fetchMovieDetail(movie_id,key){
        return fetch(this.getDetailApiUrl(movie_id,key))
            .then(res => res.json())
            .then(data=> this.updateData(data));
    }

    updateData(data){
        console.log(data);
        this.id = data.id;
        this.title = data["original_title"];
        this.poster = data["poster_path"];
        this.overview = data["overview"];
        return this;
    }

}

export default Movie;