import React from 'react'
import {Presentacion} from "./Presentacion";
import {Opciones} from "./Opciones";
import {Proyectos} from "./Proyectos";
import {Experiencia} from "./Experiencia";
import {Header} from "./Header";
import {TabPanel, TabView} from "primereact/tabview";



export const Home = () => {
    return (
        <div className="grid">
            <div className="text-center p-3 col-12 lg:col-6 lg:col-offset-3">
                <Header></Header>
            </div>
            <div className="p-3 text-justify col-12 lg:col-6 lg:col-offset-3">
                <Presentacion></Presentacion>
                <Opciones></Opciones>
            </div>
            <div className="text-center p-5 font-bold col-12 lg:col-6 lg:col-offset-3">
            </div>
            <TabView className="text-center p-0 font-bold col-12 lg:col-6 lg:col-offset-3" >
                <TabPanel header={<u>Experiencia</u>}>
                    <Experiencia></Experiencia>
                </TabPanel>
                <TabPanel header={<u>Proyectos</u>}>
                    <Proyectos></Proyectos>
                </TabPanel>
            </TabView>
        </div>
    )
}
