const model = {
    itemList : [],
    addNewItem : function(item){
        this.itemList.push(item);
    }
}; 

const itemListView = {
    init : function(){
        this.inputText = document.querySelector("#myInput");
        this.viewport = document.getElementById("myUL");
        document.querySelector('.addBtn').addEventListener('click',this.clickAddItem);
    },
    clickAddItem(){                
        const value = itemListView.inputText.value;
        controller.addItem(value);
    },
    render(){                
        const itemList = controller.getAllItems();
        //clear the view port and input text box
        this.inputText.value = "";                
        this.viewport.innerHTML = "";
        //render item list
        itemList.forEach((item)=>{
            const li = document.createElement("li");                
            const t = document.createTextNode(item);
            li.appendChild(t);
            this.viewport.appendChild(li);
        });
    }
};

const controller = {
    init : function(){
        itemListView.init();
    },
    addItem(content){                
        if (content === '') {
            alert("You must write something!");
        } else {
            //add item into model
            //render the viewport

        }
    },
    getAllItems(){
        //return itemlist
    }
}

controller.init();