class MovieListView {
    constructor(){
        this.itemTemplate = document.getElementById("movie-info-template").innerHTML;
        this.viewport = document.getElementById("viewport");
    }

    getItemTemplate(object){
        const result = this.itemTemplate
        .replace("{{this.title}}",object.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${object.poster}`)
        .replace("{{this.casts}}",object.casts)
        .replace("{{this.link}}",object.link);
        return result;
    }    

    render(templates) {  
        for (let template of templates) {        
            this.viewport.innerHTML += template;        
        }
    }
}


export default MovieListView;