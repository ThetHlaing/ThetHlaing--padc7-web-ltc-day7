import APIDataModel from "./APIModel.js";


class MovieListModel extends APIDataModel {
   
    getUpcomingApiUrl(key){
        return this.rootURL + this.upcoming.replace("<<api_key>>",key);
    }

    fetchUpcomingMovie(key){
        return fetch(this.getUpcomingApiUrl(key))
            .then(res => res.json())
            .then(data=> data.results);
    }

   
    
}

export default MovieListModel;