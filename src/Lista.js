import React, {Component} from 'react';
import VarListaData from './ListaData';
import {observer} from 'mobx-react'


class Lista extends Component {

    enviarTarea(evento) {
        if (evento.which === 13) {
            VarListaData.agregarTarea(evento.target.value);

            //REVISAR ESTA LINEA DE CODIGO CON LA LIMPIEZA DEL INPUT
            evento.target.value.reset = 0;
        }

    }

    render() {

        let listaDiv = [];
        const agregarDiv = VarListaData.tareas.forEach(
            (value, index) => (listaDiv.push(<li className="list-group-item" onClick={function () {
                VarListaData.eliminarTare(index)
            }} key={index}>{value}</li>))
        )

        return (
            <div className="container">
                <h1>Lista</h1>
                <input type="text" onKeyPress={this.enviarTarea.bind(this)}/>
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-group">
                            {listaDiv}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }


}

export default observer(Lista);


