import {extendObservable} from 'mobx';


class ListaData {

    constructor() {
        extendObservable(this,
            {tareas: ['Aprender React', 'Hacer una aplicacion con React']});
    }

    agregarTarea(tarea){
        // console.log(tarea);
        this.tareas.push(tarea);

    }
    eliminarTare(index){
        this.tareas.splice(index,1);
    }
}

var VarListaData = new ListaData;
export default VarListaData;

