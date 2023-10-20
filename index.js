// Create a Map
class indexClass{
    constructor(){
        this.map_peoplesSelect = [];
    }
}
document.getElementById("btn_addPeople").disabled = false;
function createTableCards(){
    document.getElementById("btn_startTable").disabled = true;
    document.getElementById("btnStartRandom").disabled = false;
    document.getElementById("btn_resetTable").disabled = false;
    document.getElementById("btn_addPeople").disabled = true;
    setDisabledBtnDelete(true,true);
    //createElmCT();
    let obj = new objctsListAvatarElements({array_peoplesSelect:getArray_peoplesSelect()});
    obj.setObjElms();
    this.map_peoplesSelect = obj;
}

function resetTable() {
    document.getElementById("btn_startTable").disabled = false;
    document.getElementById("btn_resetTable").disabled = true;
    document.getElementById("btnStartRandom").disabled = true;
    if( getArray_peoplesSelect().length !== 12){
        document.getElementById("btn_addPeople").disabled = false;
    }
    setDisabledBtnDelete(false,false);
    
    const container = document.querySelector('#divCardsTable');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function startRandomSelect(){
    document.getElementById("btnStartRandom").disabled = true;
    document.getElementById("btnStopRandom").disabled = false;
    randomSelect(this.map_peoplesSelect.mapObj_peoplesSelect);
}

function stopRandomSelect(){
    document.getElementById("btnStartRandom").disabled = false;
    document.getElementById("btnStopRandom").disabled = true;
    stopRanSel(this.map_peoplesSelect.mapObj_peoplesSelect);
}
