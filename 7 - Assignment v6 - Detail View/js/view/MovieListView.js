class MovieListView {
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("movie-info-template").innerHTML;
        this.viewport = document.getElementById("viewport");
        this.viewport.addEventListener('click',(event)=>this.detailViewBtnListener(event));
    }

    detailViewBtnListener(event){
        event.preventDefault();
        
        const targetEle = event.target;
        if(targetEle && targetEle.parentNode.classList.contains('detail-view-button')){
            const movieId = targetEle.parentNode.dataset.id;            
            this.controller.displayDetail(movieId);
        }
    }

    getItemTemplate(object){
        const result = this.itemTemplate
        .replace("{{this.title}}",object.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${object.poster}`)
        .replace("{{this.overview}}",object.overview)
        .replace("{{this.id}}",object.id);
        return result;
    }    

    render(templates) {  
        this.viewport.innerHTML = "";
        for (let template of templates) {        
            this.viewport.innerHTML += template;        
        }
    }
}

export default MovieListView;