import React, { Component } from 'react'

export class Pasos extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-5">¿Cómo funciona?</h1>
                <div className="container" className="mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <img src="https://i.ibb.co/qCRbGy6/registro.png" height="100px"></img>
                            <p className="mt-2" >Registra tu ONG</p>
                        </div>

                        <div className="col-sm">
                            <img src="https://i.ibb.co/kqpX10m/donadores.png" height="100px"></img>
                            <p className="mt-2" >Consigue donadores</p>
                        </div>

                        <div className="col-sm">
                            <img src="https://i.ibb.co/p09wRMB/datos.png" height="100px"></img>
                            <p className="mt-2" >Guarda sus datos</p>
                        </div>

                        <div className="col-sm">
                            <img src="https://i.ibb.co/v4s2zXF/dinero.png" height="100px"></img>
                            <p className="mt-2" >Recibe mensualmente la cantidad acordada</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pasos
