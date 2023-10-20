class People {

    constructor({count,name, win, imageSrc}){
        //TODO: inserire funzione "Le tre carte di Napoli" by Fabrizio Ciaccio
        //this.osition = position;
        this.name = name;
        this.win = win;
        this.count = count;
        this.imageSrc = imageSrc;
        this.elementHtml = {
            div: this.divAvatar = document,
            img: this.image = new Image(),
            text: this.textAvatar = document
        };
    }

    createElement(){
        this.elementHtml.img = document.createElement("img");
        this.elementHtml.img.setAttribute("id", `imgAvatar${this.count}`);
        this.elementHtml.img.style.width = "80%";
        this.elementHtml.img.src = this.imageSrc;

        this.elementHtml.text = document.createElement('p');
        this.elementHtml.text.setAttribute('id',`namePeople${this.count}`);
        this.elementHtml.text.className ="font-monospace text-uppercase text-muted";
        this.elementHtml.text.innerHTML = this.name;

        this.elementHtml.div = document.getElementById(`avatar${this.count}`);
        this.elementHtml.div.appendChild(this.elementHtml.img);
        this.elementHtml.div.appendChild(this.elementHtml.text);
    }

    update(winUpdt){
        //TODO: inserire funzione "Le tre carte di Napoli" by Fabrizio Ciaccio
        //this.imageSrc = imageSrc;
        this.win = winUpdt;
        this.elementHtml.text.className = "text-decoration-line-through";;
    }

}

class objctsListAvatarElements {
    constructor({array_peoplesSelect}){
        this.array_avatar = [];
        this.array_avatar_index = [];
        this.mapObj_peoplesSelect = [];
        this.array_peoplesSelect = array_peoplesSelect;
    }
    createElements = (()=>{
                       
        let mapObj_peoplesSelect_Step1 = this.array_peoplesSelect.map(
            ({ key, value}) => (
                new People({
                    count : key,
                    name : value,
                    win : false,
                    imageSrc : this.array_avatar[key]
                })
            )
        );
        let mapObj_peoplesSelect_Step2 = []
        let arrayIdex_Step2 = []
        let indexCount = 0;
        //ciclo per ricreare una map con ordine casuale
        while(true){
            let index_random = (Math.floor(Math.random() * (mapObj_peoplesSelect_Step1.length - 1 + 1)) + 1)-1;

            if( arrayIdex_Step2.length === mapObj_peoplesSelect_Step1.length){
                break;
            }else if( !arrayIdex_Step2.includes( index_random ) ){
                mapObj_peoplesSelect_Step1[index_random].count = indexCount;
                indexCount++;
                mapObj_peoplesSelect_Step2.push( mapObj_peoplesSelect_Step1[index_random]);
                arrayIdex_Step2.push( index_random )
            }
        }

        createElmCT(mapObj_peoplesSelect_Step2);

        mapObj_peoplesSelect_Step2.forEach((cell,number) => {
            mapObj_peoplesSelect_Step2[number].createElement();
        });

        this.mapObj_peoplesSelect = mapObj_peoplesSelect_Step2;

    });
    setObjElms(){
       
        const readPathImgs_createElements = (() => {
            const arrUrl = [
                "img/avatar/avatar1.png",
                "img/avatar/avatar2.png",
                "img/avatar/avatar3.png",
                "img/avatar/avatar4.png",
                "img/avatar/avatar5.png",
                "img/avatar/avatar6.png",
                "img/avatar/avatar7.png",
                "img/avatar/avatar8.png",
                "img/avatar/avatar9.png",
                "img/avatar/avatar10.png",
                "img/avatar/avatar11.png",
            ];
    
            let responseObjArray = updateListImgs(arrUrl);
            this.array_avatar = responseObjArray[0];
            this.array_avatar_index = responseObjArray[1];
            this.createElements();
        });

        readPathImgs_createElements();

        function updateListImgs(arrUrl){
            let deleteElementIndex = false;
            let urlImgUpdate = [];
            let idexKey = [];
            while (!deleteElementIndex){
                //Math.floor(Math.random() * (max - min) + min);
                let num_img = (Math.floor(Math.random() * (arrUrl.length - 1 + 1)) + 1)-1;
                if( arrUrl[ num_img ] !== undefined ){
                    urlImgUpdate.push(arrUrl[ num_img ]);
                    idexKey.push(arrUrl[num_img].replace( /^\D+/g, '').replace('.png',''));
                    arrUrl.splice(num_img,1);
                }else if( arrUrl.length === 0){
                    deleteElementIndex = true;
                }
            }
            return [urlImgUpdate,idexKey];
        }
        
    }

    getmapObj_peoplesSelect(){
        return this.mapObj_peoplesSelect;
    }
}