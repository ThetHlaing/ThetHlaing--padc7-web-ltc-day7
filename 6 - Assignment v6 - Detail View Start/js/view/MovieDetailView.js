class MovieDetailView {
    constructor(controller){
        this.itemTemplate = document.getElementById("movie-detail-template").innerHTML;
        this.viewport = document.getElementById("viewport");
        this.viewport.addEventListener('click',(event) =>this.detailBtnClickListener(event));
        this.controller = controller;
    }

    detailBtnClickListener(event){
        
        const targetEle = event.target;
        if(targetEle && targetEle.parentNode.classList.contains('detail-view-button')){
            event.preventDefault();
            const parentAnchor = targetEle.parentNode;
            console.log(parentAnchor.dataset.id);
            this.controller.displayMovieDetail(parentAnchor.dataset.id);
        }
    }

    getItemTemplate(object){
        const result = this.itemTemplate
        .replace("{{this.id}}",object.id)
        .replace("{{this.title}}",object.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${object.poster}`)
        .replace("{{this.casts}}",object.casts)
        .replace("{{this.link}}",object.link);
        return result;
    }    

    render(template) {  
              
            this.viewport.innerHTML = template;        
        
    }
}


export default MovieDetailView;