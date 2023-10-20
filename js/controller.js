class Objects{
    constructor(){
        this.array_peoplesSelect = [];
        this.indexList = 0;
        this.numSelect = 0;
    }
}
function setDisabledBtnDelete(disabledValue, clickCreated) {
    for (let index = 0; index < 12; index++) {
        if (document.getElementById(`btn_deletePeople${index}`) !== null) {
            document.getElementById(`btn_deletePeople${index}`).disabled = disabledValue;
        }
    }
    if (this.array_peoplesSelect.length !== 12) {
        document.getElementById("btn_addPeople").disabled = clickCreated;
    }
}

// Aggiungi un ascoltatore per l'evento "DOMContentLoaded" per eseguire la funzione quando il documento è pronto
document.addEventListener("DOMContentLoaded", function() {
    setDisabledBtnDelete(true, true); // Disabilita i bottoni di eliminazione
});

var id = null;
function randomSelect(mapObject) {
    clearInterval(id);
    id = setInterval(frame, 80);
    this.numSelect = 0;
    function frame() {
        
        let num = (Math.floor(Math.random() * (mapObject.length - 1 + 1)) + 1)-1;
        let stopFrame = checkLengthFrame()
        if( !mapObject[num].win ){
            if( this.numSelect !== num ){
                document.getElementById(`cellAvatar${this.numSelect}`).classList.remove('border','border-primary');
                document.getElementById(`cellAvatar${num}`).className = 'border border-primary divCellBorder col-3';
                this.numSelect = num;
            }
        }else if(stopFrame){
            clearInterval(id);
            document.getElementById("btnStopRandom").disabled = true;
        }
    };

    function checkLengthFrame(){
        let totWin = 0;
        let stopTrue = false;
        mapObject.forEach((cell,index)=>{
            if( cell.win ){
                document.getElementById(`cellAvatar${index}`).classList.remove('border');
                document.getElementById(`cellAvatar${index}`).className = 'divCellOpacity col-3';
                totWin++;
            }
        });
        if( (totWin === 0 ? 0 : totWin+1) === mapObject.length ){
            stopTrue = true;
        }
        return stopTrue;
    }
}

function stopRanSel(mapObject){
    mapObject[this.numSelect].win = true;
    document.getElementById(`cellAvatar${this.numSelect}`).classList.remove('border-primary');
    clearInterval(id);
} 

function createRowPeople(countRow,namePeople){
    return (
    `<div id="row_people${countRow}" class="row">
        <div class="col-9 form-select-sm ">
            <a id="nameTxt_people${countRow}" href="#" class="list-group-item  list-group-item-secondary font-monospace text-uppercase">${namePeople}</a>
        </div>
        <div class="col-3 form-select-sm">
            <button id="btn_deletePeople${countRow}" type="button" class="btn btn-link btn-outline-danger font-monospace text-uppercase" onclick='deletePeople(this);'>
                <img src="img/icon/iconDelete.png"/>
            </button>
        </div>
    </div>`
    );
}

function insertPeople(){
    document.getElementById("btn_startTable").disabled = false;
    let inputName = document.getElementById('input_txtNamePeople').value;
    document.getElementById('input_txtNamePeople').value = '';
    if( inputName.length === 0 ){
        //error: insert name
        console.log('>>>>>>>>>>>>>>')
    }else if( inputName.length > 24 ){
        //error: name troppo lungo 24
    }else{
        this.indexList = ( this.indexList === undefined ? 0 : this.indexList);
        while( true ){
            if( this.array_peoplesSelect === undefined){
                this.array_peoplesSelect = [{ key: this.indexList, value: inputName }];
                document.getElementById(`list_Row_People`).innerHTML += createRowPeople(this.indexList,inputName) ;
            }else if( this.array_peoplesSelect.length === 12 ){
                document.getElementById("btn_addPeople").disabled = true;
            }else if( this.array_peoplesSelect[ this.indexList ] === undefined ){
                
                let checkDuplicateValue = false;
                this.array_peoplesSelect.forEach( (cell,number)=>{
                    if( this.array_peoplesSelect[ number ].value.toLowerCase() === inputName.toLowerCase()){
                        checkDuplicateValue = true;
                    }
                });

                if( checkDuplicateValue ){
                    break;
                }else{
                    this.array_peoplesSelect.push(
                        { key: this.indexList, value: inputName }
                    );
                }

                document.getElementById(`list_Row_People`).innerHTML += createRowPeople(this.indexList,inputName) ;
            }else if( this.array_peoplesSelect[ this.indexList ].value.toLowerCase() === inputName.toLowerCase()){
            }
            this.indexList++
            break;
        }
    }
}

function getArray_peoplesSelect(){
    return this.array_peoplesSelect;
}

function setArray_peoplesSelect(){
    this.array_peoplesSelect = [];
}

function deletePeople(obj){
    console.log(this.array_peoplesSelect);
    document.getElementById(`row_people${obj.id.replace( /^\D+/g, '')}`).remove();
    this.array_peoplesSelect.splice(obj.id.replace( /^\D+/g, ''),1);
    if(this.array_peoplesSelect.length === 0){
        document.getElementById("btn_startTable").disabled = true;
    }else if( this.array_peoplesSelect.length < 13){
        document.getElementById("btn_addPeople").disabled = false;
    }
}

function updateListImgs(arrUrl){
    let deleteElementIndex = false;
    let urlImgUpdate = [];
    while (!deleteElementIndex){
        //Math.floor(Math.random() * (max - min) + min);
        let num_img = (Math.floor(Math.random() * (arrUrl.length - 1 + 1)) + 1)-1;
        if( arrUrl[ num_img ] !== undefined ){
            urlImgUpdate.push(arrUrl[ num_img ]);
            arrUrl.splice(num_img,1);
        }else if( arrUrl.length === 0){
            deleteElementIndex = true;
        }
    }
    return urlImgUpdate;
}

function createElmCT (createdRowsCells) {
    let divTableCards = document.getElementById(`divCardsTable`);
    let countRow = 0;
    createdRowsCells.forEach((cell,number) => {
        let numberCell_rowDivCardsTable = document.querySelector(`#rowCardsTable${ countRow }`);
        if( numberCell_rowDivCardsTable === null ){
            createElementCardsTable(true,countRow,cell.count);
        }else if( numberCell_rowDivCardsTable.querySelectorAll("div.col-3").length < 4){
            createElementCardsTable(false,countRow,cell.count);
        }else if( numberCell_rowDivCardsTable.querySelectorAll("div.col-3").length >= 4){
            countRow++;
            createElementCardsTable(true,countRow,cell.count);
        }
    });

    function createElementCardsTable(newRow,countRow,countDivCell){
        if(newRow){
            let rowDiv = document.createElement('div');
            rowDiv.setAttribute('id',`rowCardsTable${countRow}`);
            rowDiv.className ="row";
            divTableCards.appendChild(rowDiv);
        }

        let divCell = document.createElement('div');
        divCell.setAttribute('id',`cellAvatar${countDivCell}`);
        divCell.className ="col-3";

        let divElementPeople = document.createElement('div');
        divElementPeople.setAttribute('id',`avatar${countDivCell}`);
        divElementPeople.className ="text-center";

        document.getElementById(`rowCardsTable${countRow}`).appendChild(divCell);
        document.getElementById(`cellAvatar${countDivCell}`).appendChild(divElementPeople);
    }
}

function setDisabledBtnDelete(disabledValue,clickCreated){
    for (let index = 0; index < 12; index++) {
        if( document.getElementById(`btn_deletePeople${index}`) !== null ){
            document.getElementById(`btn_deletePeople${index}`).disabled = disabledValue;
        }        
    }
    if( this.array_peoplesSelect.length !== 12){
        document.getElementById("btn_addPeople").disabled = clickCreated;
    }
}