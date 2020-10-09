import React from 'react'
import ThreeRows from './ThreeRows';
const TablaAsuntos = () => {
    return(
        <div class="table-responsive">
            <table class="table ">
                                            <thead>
                                                <tr>
                                                    <th className="th-bsvv">E.Com</th>
                                                    <th className="th-bsvv">Cliente/Asunto</th>
                                                    <th className="th-bsvv">Tarifa</th>
                                                    <th className="th-bsvv">Tipo Tarifa</th>
                                                    <th className="th-bsvv">UF/hr ppto</th>
                                                    <th className="th-bsvv">UF/hr per</th>
                                                    <th className="th-bsvv">UF/hr ac</th>
                                                    <th className="th-bsvv">Tipo</th>
                                                    <th className="th-bsvv">Horas Ppto</th>
                                                    <th className="th-bsvv">Horas Trab</th>
                                                    <th className="th-bsvv">Prom Hist</th>
                                                    <th className="th-bsvv">%Uso</th>
                                                    <th className="th-bsvv">Barra</th>
                                                    <th className="th-bsvv">Periodo desde</th>
                                                    <th className="th-bsvv">A</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* Encargado comercial */}
                                                    <td className="td-bsvv">JVL</td>

                                                    {/* Cliente / Asunto */}
                                                    <td className="td-bsvv"><span>Ingevec Inmobiliaria / Asesoria Gral</span></td>

                                                    {/* Tarifa */}
                                                    <td className="td-bsvv td-bsvv-special-font">150</td>

                                                    {/* Tipo Tarifa */}
                                                    <td className="td-bsvv">TARIFA</td>

                                                    {/* UF/hr ppto */}
                                                    <td className="td-bsvv td-bsvv-special-font">2.8</td>

                                                    {/* UF/hr per */}
                                                    <td class="td-bsvv td-bsvv-special-font">3</td>

                                                    {/* UF/hr ac */}
                                                    <td class="td-bsvv td-bsvv-special-font">2.3</td>

                                                    {/* Tipo */}
                                                    <ThreeRows socio={"Socio"} senior={"Senior"} junior={"Junior"}/>


                                                    {/* Horas Presupuestadas */}
                                                    <ThreeRows socio={5} senior={10} junior={45}/>

                                                    {/* Horas Trabajadas */}
                                                    <ThreeRows socio={3} senior={5} junior={25}/>

                                                    {/* Promedio Historico */}
                                                    <ThreeRows socio={4} senior={7} junior={30}/>

                                                    {/* %Uso */}
                                                    <ThreeRows socio={"25%"} senior={"50%"} junior={"70%"}/>

                                                    {/* Barra */}
                                                    <ThreeRows socio={"poco"} senior={"mediano"} junior={"mucho"}/>

                                                    {/* Periodo desde */}
                                                    <td class="td-bsvv">01-09-20</td>

                                                    {/* Acciones */}
                                                    <td class="td-bsvv">
                                                        <tr>
                                                            <button>add</button>
                                                        </tr>
                                                        <tr>
                                                            <button>fav</button>
                                                        </tr>

                                                    </td>



                                                </tr>
                                         
                                            </tbody>
                                        </table>
        </div>
    )
}

export default TablaAsuntos;